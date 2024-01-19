export class ErrorDto {

    localizedMessage: string = '';
    stackTrace?: string[] = [];
    suppressed: Object[] = [];
    key: string = '';
}
