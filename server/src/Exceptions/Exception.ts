interface ExceptionArgs {
  message: string;
};

export class Exception extends Error {
  public message!: string;
  public status!: number;

  constructor(args: ExceptionArgs) {
    super(args.message);
  };
};