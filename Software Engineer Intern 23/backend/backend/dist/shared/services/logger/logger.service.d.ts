export declare class LoggerService {
    private readonly logger;
    private context;
    constructor();
    error(message: string): void;
    log(message: string): void;
    warn(message: string): void;
    info(message: string): void;
}
