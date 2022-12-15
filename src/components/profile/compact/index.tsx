export type ProfileCompactProps = {
  user: {
    name: string;
    address: string;
  };
  dao: [{
    id: string;
    name: string;
  }];
  nft: {
    price: number;
    count: number;
    owned: {
      price: number;
      count: number;
    },
    favorites: number;
  };
  papyrus: [{
    name: string;
    thumbnail: string;
  }];
};

export const ProfileCompact = () => {
  return (
    <>Profile</>
  );
};
