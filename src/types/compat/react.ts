import type { FC, PropsWithChildren } from 'react';

export type FCWithChildren<T = {}> = FC<PropsWithChildren<T>>;
