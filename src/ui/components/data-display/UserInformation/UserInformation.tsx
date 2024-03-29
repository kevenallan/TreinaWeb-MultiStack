import React from "react";
import {
    UserInformationContainer,
    UserName,
    UserDescription,
    AvatarStyled,
    RaitingStyled
} from './UserInformation.style';

interface UserInformationProps{
    picture: string;
    name: string;
    rating: number;
    description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
    return (
        <UserInformationContainer>
            <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
            <UserName>{props.name}</UserName>
            <RaitingStyled readOnly value={props.rating}/>
            <UserDescription>{props.description}</UserDescription>
        </UserInformationContainer>
    )
}

export default UserInformation;