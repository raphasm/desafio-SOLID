import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userId = this.usersRepository.findById(user_id);

    if (userId.admin === false) {
      throw new Error("you are not allowed to do this!!!");
    } else if (!userId) {
      throw new Error("User already Exists!!!!!!!!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
