// criando aliases para tipos complexos

type Status = 'pending' | 'approved' | 'rejected';

//intersection types
type UserWithRole = user2 & {
  role: 'admin' | 'user';
};

// function types
type EventHandler = (event: Event) => void;

// generic type alias
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};