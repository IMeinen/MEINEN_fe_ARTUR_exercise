import React from 'react';
import {useNavigate} from 'react-router-dom';
import {BackButton} from 'components';
import {HeaderContainer, NavigationHeader, Title} from './styles';
import {HeaderProps} from './types';

const Header = ({title, showBackButton = true}: HeaderProps) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <NavigationHeader>
                {showBackButton && (
                    <BackButton
                        onClick={() => {
                            navigate(-1);
                        }}
                    />
                     
                )}
                <Title>{title}</Title>
            </NavigationHeader>
        </HeaderContainer>
    );
};

export default Header;
