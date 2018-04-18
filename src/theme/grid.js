import styled, {css} from 'styled-components';
import media from '../theme/media'

export const Container = styled.div`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 30px;
  ${media.tablet`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  `}
  ${media.phone`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  `}
`;
