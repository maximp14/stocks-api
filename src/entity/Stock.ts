import { User } from "./User";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Stock extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  @Column()
  name: string;

  @Column()
  currency: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => User, (user) => user.stocks)
  user: User;
}
