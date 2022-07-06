
export interface SWReponse {
  code: number;
  data: Data;
}

export interface Data {
  items: User[];
}


export interface User {
  email: string;
  id: number;
}


export interface SingleReponse {
  code: number;
  data: SingleUser;
}

export interface SingleUser {
  email: string;
  id: number;
}
