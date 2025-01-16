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

        createMany: procedure.input($Schema.TradingSetupInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tradingSetup.createMany(input as any))),

        create: procedure.input($Schema.TradingSetupInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tradingSetup.create(input as any))),

        deleteMany: procedure.input($Schema.TradingSetupInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tradingSetup.deleteMany(input as any))),

        delete: procedure.input($Schema.TradingSetupInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tradingSetup.delete(input as any))),

        findFirst: procedure.input($Schema.TradingSetupInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).tradingSetup.findFirst(input as any))),

        findMany: procedure.input($Schema.TradingSetupInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).tradingSetup.findMany(input as any))),

        findUnique: procedure.input($Schema.TradingSetupInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).tradingSetup.findUnique(input as any))),

        updateMany: procedure.input($Schema.TradingSetupInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tradingSetup.updateMany(input as any))),

        update: procedure.input($Schema.TradingSetupInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tradingSetup.update(input as any))),

        count: procedure.input($Schema.TradingSetupInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).tradingSetup.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TradingSetupCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradingSetupCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradingSetupCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradingSetupCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TradingSetupCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradingSetupCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TradingSetupGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TradingSetupGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradingSetupCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradingSetupCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TradingSetupGetPayload<T>, Context>) => Promise<Prisma.TradingSetupGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TradingSetupDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradingSetupDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradingSetupDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradingSetupDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TradingSetupDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradingSetupDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TradingSetupGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TradingSetupGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradingSetupDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradingSetupDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TradingSetupGetPayload<T>, Context>) => Promise<Prisma.TradingSetupGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TradingSetupFindFirstArgs, TData = Prisma.TradingSetupGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.TradingSetupFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TradingSetupGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TradingSetupFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TradingSetupFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TradingSetupGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TradingSetupGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TradingSetupFindManyArgs, TData = Array<Prisma.TradingSetupGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.TradingSetupFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TradingSetupGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TradingSetupFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TradingSetupFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TradingSetupGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TradingSetupGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TradingSetupFindUniqueArgs, TData = Prisma.TradingSetupGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TradingSetupFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TradingSetupGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TradingSetupFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TradingSetupFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TradingSetupGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TradingSetupGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TradingSetupUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradingSetupUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradingSetupUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradingSetupUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TradingSetupUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TradingSetupUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TradingSetupGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TradingSetupGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TradingSetupUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TradingSetupUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TradingSetupGetPayload<T>, Context>) => Promise<Prisma.TradingSetupGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.TradingSetupCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TradingSetupCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.TradingSetupCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TradingSetupCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TradingSetupCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.TradingSetupCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TradingSetupCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TradingSetupCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
