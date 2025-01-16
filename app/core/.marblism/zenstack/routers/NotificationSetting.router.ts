/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.NotificationSettingInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).notificationSetting.createMany(input as any))),

        create: procedure.input($Schema.NotificationSettingInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).notificationSetting.create(input as any))),

        deleteMany: procedure.input($Schema.NotificationSettingInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).notificationSetting.deleteMany(input as any))),

        delete: procedure.input($Schema.NotificationSettingInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).notificationSetting.delete(input as any))),

        findFirst: procedure.input($Schema.NotificationSettingInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).notificationSetting.findFirst(input as any))),

        findMany: procedure.input($Schema.NotificationSettingInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).notificationSetting.findMany(input as any))),

        findUnique: procedure.input($Schema.NotificationSettingInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).notificationSetting.findUnique(input as any))),

        updateMany: procedure.input($Schema.NotificationSettingInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).notificationSetting.updateMany(input as any))),

        update: procedure.input($Schema.NotificationSettingInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).notificationSetting.update(input as any))),

        count: procedure.input($Schema.NotificationSettingInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).notificationSetting.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.NotificationSettingCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NotificationSettingCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NotificationSettingCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NotificationSettingCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.NotificationSettingCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NotificationSettingCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NotificationSettingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NotificationSettingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NotificationSettingCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NotificationSettingCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NotificationSettingGetPayload<T>, Context>) => Promise<Prisma.NotificationSettingGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.NotificationSettingDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NotificationSettingDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NotificationSettingDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NotificationSettingDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.NotificationSettingDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NotificationSettingDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NotificationSettingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NotificationSettingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NotificationSettingDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NotificationSettingDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NotificationSettingGetPayload<T>, Context>) => Promise<Prisma.NotificationSettingGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.NotificationSettingFindFirstArgs, TData = Prisma.NotificationSettingGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.NotificationSettingFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NotificationSettingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NotificationSettingFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.NotificationSettingFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NotificationSettingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NotificationSettingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.NotificationSettingFindManyArgs, TData = Array<Prisma.NotificationSettingGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.NotificationSettingFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.NotificationSettingGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NotificationSettingFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.NotificationSettingFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.NotificationSettingGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.NotificationSettingGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.NotificationSettingFindUniqueArgs, TData = Prisma.NotificationSettingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.NotificationSettingFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NotificationSettingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NotificationSettingFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NotificationSettingFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NotificationSettingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NotificationSettingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.NotificationSettingUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NotificationSettingUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NotificationSettingUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NotificationSettingUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.NotificationSettingUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NotificationSettingUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NotificationSettingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NotificationSettingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NotificationSettingUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NotificationSettingUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NotificationSettingGetPayload<T>, Context>) => Promise<Prisma.NotificationSettingGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.NotificationSettingCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.NotificationSettingCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.NotificationSettingCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.NotificationSettingCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.NotificationSettingCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.NotificationSettingCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.NotificationSettingCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.NotificationSettingCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
