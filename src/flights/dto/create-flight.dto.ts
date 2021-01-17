import {ApiProperty} from "@nestjs/swagger";

export class CreateFlightDto {
    @ApiProperty()
    readonly origin: string;
    @ApiProperty()
    readonly destination: string;
    @ApiProperty()
    readonly flightNumber: number;
    @ApiProperty()
    readonly depart: Date ;
    @ApiProperty()
    readonly arrive: Date ;
    @ApiProperty()
    readonly nonstop: boolean;
}
