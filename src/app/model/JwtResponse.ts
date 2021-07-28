export class JwtResponse {
  public token;
  public name;
  public roles: any[];
  constructor(token: string, name: string, roles: any) {
    this.token = token;
    this.name = name;
    this.roles = roles;
  }
}
