import styled from 'styled-components';
// eslint-disable-next-line import/prefer-default-export

export const DetailsContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: auto;
`;

export const Description = styled.p`
  font-size: 18px;
  width: 80%;
  height: auto;
  text-align: center;
  margin: auto;
`;

export const GalleryContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const GalleryImgContainer = styled.div`
  flex: ${({ open }) => (open ? '' : '1')};
  overflow: hidden;
  min-width: 200px;
  max-width: ${({ open }) => (open ? '100%' : '200px')};
  width: ${({ open }) => (open ? '100%' : 'inherit')};
  height: ${({ open }) => (open ? 'auto' : '150px')};
  border-radius: 5%;
  margin: 25px;
  box-shadow: ${props => props.theme.shadow.asana};
  cursor: pointer;
  transition: all 2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const GalleryImg = styled.img`
  width: inherit;
  display: block;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  max-height: 130%;
`;

export const ListWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: rows;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tool = styled.div`
  font-size: 15px;
  margin: 10px;
  width: auto;
  padding: 5px;
`;

export const Tag = styled.div`
  margin: 10px;
  font-size: 15px;
  background-color: ${({ color }) => color};
  color: white;
  width: auto;
  padding: 5px;
  border-radius: 5%;
  box-shadow: ${props => props.theme.shadow.asana};
`;
