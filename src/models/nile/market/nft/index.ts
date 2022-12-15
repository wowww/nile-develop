import User from '@/models/nile/user';
import Collection from '@/models/nile/market/collection';
import { MarketNftItemStatusType } from '@components/market/nft/item/status';

type Nft = {
  id: number;
  title: string;
  image: string;
  favorite: boolean;
  thumbnail?: string;
  saleStart: number;
  price: number;
  collection: Collection;
  creator: User;
  owner: User;
  participants: number;
  status: MarketNftItemStatusType;
};

export default Nft;
