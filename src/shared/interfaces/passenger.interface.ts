import {TransportTypesEnum} from "../enums/transport-types.enum";

export interface IPassenger {
  "transactionsByTransportTypes": {
    [key  in TransportTypesEnum]: number
  }
}
