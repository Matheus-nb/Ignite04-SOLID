import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User dont exists!");
    }

    if (user.admin === false) {
      throw new Error("User is not an admin!");
    }

    const usersList = this.usersRepository.list();

    return usersList;
  }
}

export { ListAllUsersUseCase };
