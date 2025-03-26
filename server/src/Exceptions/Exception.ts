export class Exception extends Error {
  public message!: string;
  public status!: number;

  constructor(message: string) {
    super(message);
  };
};