import React, {Component} from 'react';
import strings from "../../res/strings";
import {StyledCopyRightWrapper} from "./styles";

class CopyRight extends Component {
  render() {
    return(
      <StyledCopyRightWrapper>
        {strings.copyright}
      </StyledCopyRightWrapper>
    )
  }
}

export default CopyRight;