/**
 * New typescript file
 */
export class UserJson {
	id: number;
  name: string;
  password: string;
  role: string;

  constructor() {
  }
  
  public setName(name: string)
  {
    this.name = name;
  }
  public getName()
  {
    return this.name;
  }
  public setPassword(password: string)
  {
    this.password = password;
  }
  public getPassword()
  {
    return this.password;
  }
  public setRole(role: string)
  {
    this.role = role;
  }
  public getRole()
  {
    return this.role;
  }
  public setID(id: number)
  {
  this.id=id;
  }
  public getID()
  {
  return this.id;
  }
}