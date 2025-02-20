export type RawMethod = {
  [key: string]: {
    Name: string;
  };
};

export type Method = {
  id: number;
  name: string;
};

export const EmptyMethod: Method = {
  id: -1,
  name: '',
};
