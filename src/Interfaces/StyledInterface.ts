export interface ColorProps {
  color: string;
}
export interface BgColorProps {
  bgcolor: string;
}
export interface Color_BgColorProps {
  bgcolor?: string;
  color?: string;
}

export interface BorderProps extends Color_BgColorProps {
  border: string;
}

export interface MarginProps extends Color_BgColorProps {
  margin: string;
}

export interface FontProps extends Color_BgColorProps {
  fontWeight: string;
}

export interface WidthProps extends Color_BgColorProps {
  width: string;
}
