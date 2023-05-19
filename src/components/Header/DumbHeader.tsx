import { DropButton, Icon, IconButton, LastView, Logo, LogoName, Option, StyleHeader, Tools } from './style.header'
import navigation from '../../icons/navigation.png'
import plus from '../../icons/plus.svg'
import minus from '../../icons/minus.png'
import React from 'react'
import { ContextTypes, PerProps } from '../types'
import { Per } from './Persentages'

const DumbHeader: React.FC<ContextTypes> = ({handleSetAsDefault, zoomIn, zoomOut, zoomPer}) => (
    <StyleHeader>
        <Logo>
            <LogoName>Services</LogoName>
        </Logo>
        <Tools>
            <LastView>Last View</LastView>
            <IconButton onClick={handleSetAsDefault}>
                <Icon src={navigation} alt="icon"/>
            </IconButton>
            <IconButton onClick={zoomIn}>
                <Icon src={plus} alt="icon"/>
            </IconButton>
            <DropButton name="zoom" onChange={(e) => zoomPer(+e.target.value)}>
                {Per.map(({per, value}: PerProps) =>
                    <Option value={value} key={per}>{per}</Option>
                )}
            </DropButton>
            <IconButton onClick={zoomOut}>
                <Icon src={minus} alt="icon"/>
            </IconButton>
        </Tools>
    </StyleHeader>
)
export default DumbHeader;