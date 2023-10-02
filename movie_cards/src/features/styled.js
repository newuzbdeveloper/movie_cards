import styled from "@emotion/styled";

export const ImageCard = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  -webkit-mask-image: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  mask-image: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  border-radius: 15px;
`;
