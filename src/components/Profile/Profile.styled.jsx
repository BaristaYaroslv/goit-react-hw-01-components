import styled from '@emotion/styled';

export const Card = styled.div`
    margin: auto;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 450px;
    border: 1px solid rgb(199, 199, 235);
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;    
`;

export const UserName = styled.p`
  display: inline-block;
  margin-bottom: 0;
  font-size: 32px;
  font-weight: 600;
`;

export const UserTag = styled.p`
    display: inline-block;
    margin-bottom: 0;
    color: grey;
    font-size: 20px;
    font-weight: 40px;
`;

export const UserLocation = UserTag;

export const StatusList = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 1px 3px 4px grey;
`;

export const StatusItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;

    width: 33.33%;

    outline: 1px solid grey;
    background-color: #E7F8FC;
`;

export const StatusLabel = styled.span`
    color: grey;
`;

export const StatusQuantity = styled.span`
    color: black;
    font-weight: 600;
`;