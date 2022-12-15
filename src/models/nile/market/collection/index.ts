import User from '@/models/nile/user';
import Nft from '@/models/nile/market/nft';

type Collection = {
  id: number;
  status: string;
  address?: string;
  disabled?: boolean;
  slug?: string;
  title: string;
  image?: string;
  creator: User;
  items?: Nft[];
};

export default Collection;
