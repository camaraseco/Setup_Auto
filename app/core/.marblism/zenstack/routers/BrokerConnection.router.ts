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

        createMany: procedure.input($Schema.BrokerConnectionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brokerConnection.createMany(input as any))),

        create: procedure.input($Schema.BrokerConnectionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brokerConnection.create(input as any))),

        deleteMany: procedure.input($Schema.BrokerConnectionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brokerConnection.deleteMany(input as any))),

        delete: procedure.input($Schema.BrokerConnectionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brokerConnection.delete(input as any))),

        findFirst: procedure.input($Schema.BrokerConnectionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).brokerConnection.findFirst(input as any))),

        findMany: procedure.input($Schema.BrokerConnectionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).brokerConnection.findMany(input as any))),

        findUnique: procedure.input($Schema.BrokerConnectionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).brokerConnection.findUnique(input as any))),

        updateMany: procedure.input($Schema.BrokerConnectionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brokerConnection.updateMany(input as any))),

        update: procedure.input($Schema.BrokerConnectionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brokerConnection.update(input as any))),

        count: procedure.input($Schema.BrokerConnectionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).brokerConnection.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BrokerConnectionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrokerConnectionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrokerConnectionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrokerConnectionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BrokerConnectionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrokerConnectionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BrokerConnectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BrokerConnectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrokerConnectionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrokerConnectionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BrokerConnectionGetPayload<T>, Context>) => Promise<Prisma.BrokerConnectionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BrokerConnectionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrokerConnectionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrokerConnectionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrokerConnectionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BrokerConnectionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrokerConnectionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BrokerConnectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BrokerConnectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrokerConnectionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrokerConnectionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BrokerConnectionGetPayload<T>, Context>) => Promise<Prisma.BrokerConnectionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BrokerConnectionFindFirstArgs, TData = Prisma.BrokerConnectionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.BrokerConnectionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BrokerConnectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BrokerConnectionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BrokerConnectionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BrokerConnectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BrokerConnectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BrokerConnectionFindManyArgs, TData = Array<Prisma.BrokerConnectionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.BrokerConnectionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BrokerConnectionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BrokerConnectionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BrokerConnectionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BrokerConnectionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BrokerConnectionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BrokerConnectionFindUniqueArgs, TData = Prisma.BrokerConnectionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BrokerConnectionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BrokerConnectionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BrokerConnectionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BrokerConnectionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BrokerConnectionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BrokerConnectionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BrokerConnectionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrokerConnectionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrokerConnectionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrokerConnectionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BrokerConnectionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrokerConnectionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BrokerConnectionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BrokerConnectionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrokerConnectionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrokerConnectionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BrokerConnectionGetPayload<T>, Context>) => Promise<Prisma.BrokerConnectionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.BrokerConnectionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BrokerConnectionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.BrokerConnectionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.BrokerConnectionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.BrokerConnectionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.BrokerConnectionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.BrokerConnectionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BrokerConnectionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
