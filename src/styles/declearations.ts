import "styled-components";

import { colors } from "./colors";
import { fontSize } from "./fontSize";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    fontSize: typeof fontSize;
  }
}
