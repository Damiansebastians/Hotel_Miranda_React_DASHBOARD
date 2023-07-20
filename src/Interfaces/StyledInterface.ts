
export interface BgColorProps {
  bgcolor: string;
};

export interface ColorProps {
  color: string;
};

export interface BorderProps {
  border: string;
};

export interface MarginProps {
  margin: string;
};

export interface WeightProps {
  fontWeight: string; 
};

export interface WidthProps {
  width: string;
}

export type AllProps = BgColorProps & ColorProps & BorderProps & MarginProps & WeightProps;