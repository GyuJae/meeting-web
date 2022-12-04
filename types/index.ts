export interface Result<T> {
  result: T;
}

export interface CoreOutput {
  ok: boolean;
  error?: string;
}

export interface Input<T> {
  input: T;
}
