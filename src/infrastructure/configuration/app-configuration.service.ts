import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigurationService {
  private readonly _connectionString!: string;

  get connectionString(): string {
    return this._connectionString;
  }

  constructor(private readonly _configService: ConfigService) {
    this._connectionString = this._getConnectionStringFromEnvFile();
  }

  private _getConnectionStringFromEnvFile(): string {
    const connectionString = `mongodb+srv://mirzaOP:qzN0jojKtATbHxVF@cluster0.bpoemf2.mongodb.net/?retryWrites=true&w=majority`;
    if (!connectionString) {
      throw new Error(
        'No connection string has been provided in the .env file.',
      );
    }

    return connectionString;
  }
}
