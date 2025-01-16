import crypto from 'crypto'

const ALGORITHM = 'aes-256-gcm'
const IV_LENGTH = 16
const SALT_LENGTH = 64
const TAG_LENGTH = 16
const KEY_LENGTH = 32
const ITERATIONS = 100000

/**
 * Encrypts sensitive data using AES-256-GCM
 * @param data - The data to encrypt
 * @param masterKey - The master key used for encryption
 * @returns The encrypted data as a base64 string
 */
export const encrypt = (data: string, masterKey: string): string => {
  // Generate salt and IV
  const salt = crypto.randomBytes(SALT_LENGTH)
  const iv = crypto.randomBytes(IV_LENGTH)

  // Derive key using PBKDF2
  const key = crypto.pbkdf2Sync(
    masterKey,
    salt,
    ITERATIONS,
    KEY_LENGTH,
    'sha256',
  )

  // Create cipher
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)

  // Encrypt data
  const encrypted = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()])

  // Get auth tag
  const tag = cipher.getAuthTag()

  // Combine all components
  const result = Buffer.concat([salt, iv, tag, encrypted])

  return result.toString('base64')
}

/**
 * Decrypts encrypted data using AES-256-GCM
 * @param encryptedData - The encrypted data as a base64 string
 * @param masterKey - The master key used for decryption
 * @returns The decrypted data
 */
export const decrypt = (encryptedData: string, masterKey: string): string => {
  // Convert base64 to buffer
  const buffer = Buffer.from(encryptedData, 'base64')

  // Extract components
  const salt = buffer.subarray(0, SALT_LENGTH)
  const iv = buffer.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH)
  const tag = buffer.subarray(
    SALT_LENGTH + IV_LENGTH,
    SALT_LENGTH + IV_LENGTH + TAG_LENGTH,
  )
  const encrypted = buffer.subarray(SALT_LENGTH + IV_LENGTH + TAG_LENGTH)

  // Derive key using PBKDF2
  const key = crypto.pbkdf2Sync(
    masterKey,
    salt,
    ITERATIONS,
    KEY_LENGTH,
    'sha256',
  )

  // Create decipher
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
  decipher.setAuthTag(tag)

  // Decrypt data
  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final(),
  ])

  return decrypted.toString('utf8')
}
