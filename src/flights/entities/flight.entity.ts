import { PrimaryGeneratedColumn, Column, Entity} from 'typeorm'
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Flight {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    origin: string;

    @ApiProperty()
    @Column()
    destination: string;

    @ApiProperty()
    @Column()
    flightNumber: number;

    @ApiProperty()
    @Column({ type: 'date' })
    depart: Date;

    @ApiProperty()
    @Column({ type: 'date' })
    arrive: Date;

    @ApiProperty()
    @Column()
    nonstop: boolean;
}
