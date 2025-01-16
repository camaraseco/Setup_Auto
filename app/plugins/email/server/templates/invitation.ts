export const TemplateInvitationToOrganization = `
<Card.Header>
  <h2>Welcome to Setup Trade</h2>
  <hr />
</Card.Header>

<Card.Body>
  <p>You have been invited to join.</p>
  <p>
    <a href="{{ url_invitation }}" target="_blank">Accept Invitation</a>
  </p>
</Card.Body>

<Card.Footer>
  <p>Sent by Setup Trade</p>
</Card.Footer>
  `.trim()
