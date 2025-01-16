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

        createMany: procedure.input($Schema.TradeInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trade.createMany(input as any))),

        create: procedure.input($Schema.TradeInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trade.create(input as any))),

        deleteMany: procedure.input($Schema.TradeInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trade.deleteMany(input as any))),

        delete: procedure.input($Schema.TradeInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trade.delete(input as any))),

        findFirst: procedure.input($Schema.TradeInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).trade.findFirst(input as any))),

        findMany: procedure.input($Schema.TradeInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).trade.findMany(input as any))),

        findUnique: procedure.input($Schema.TradeInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).trade.findUnique(input as any))),

        updateMany: procedure.input($Schema.TradeInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trade.updateMany(input as any))),

        update: procedure.input($Schema.TradeInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trade.update(input as any))),

        count: procedure.input($Schema.TradeInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).trade.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TradeCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradeCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradeCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradeCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TradeCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradeCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TradeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TradeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradeCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradeCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TradeGetPayload<T>, Context>) => Promise<Prisma.TradeGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TradeDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradeDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradeDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradeDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TradeDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradeDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TradeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TradeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradeDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradeDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TradeGetPayload<T>, Context>) => Promise<Prisma.TradeGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TradeFindFirstArgs, TData = Prisma.TradeGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.TradeFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TradeGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TradeFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TradeFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TradeGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TradeGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TradeFindManyArgs, TData = Array<Prisma.TradeGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.TradeFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TradeGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TradeFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TradeFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TradeGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TradeGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TradeFindUniqueArgs, TData = Prisma.TradeGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TradeFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TradeGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TradeFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TradeFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TradeGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TradeGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TradeUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradeUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradeUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradeUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TradeUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradeUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TradeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TradeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradeUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradeUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TradeGetPayload<T>, Context>) => Promise<Prisma.TradeGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.TradeCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TradeCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.TradeCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TradeCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TradeCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.TradeCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TradeCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TradeCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
