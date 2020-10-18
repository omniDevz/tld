import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  ListMaintainers,
  ItemMaintainer,
  HeaderMaintainer,
  Infos,
  Name,
  Description,
  LevelAccess,
} from './styled';

import { ListProps } from './interface';

const List: React.FC<ListProps> = ({ list }) => {
  const levelAccessLogged = 2;

  return (
    <ListMaintainers>
      {list &&
        list.map(({ adminId, name, email, levelAccess }) => {
          const labelLevelAccess =
            levelAccess < 2 ? 'Administrador' : 'Professor';

          return (
            <ItemMaintainer key={adminId}>
              <HeaderMaintainer>
                <Infos>
                  <Name>{name}</Name>
                  <Description>{email}</Description>
                </Infos>
                <Infos>
                  {levelAccessLogged >= levelAccess && (
                    <Link
                      to={`/maintainer/update/${adminId}`}
                      title={`Editar dados de ${name}`}
                    >
                      <FiEdit />
                    </Link>
                  )}
                  <LevelAccess>{labelLevelAccess}</LevelAccess>
                </Infos>
              </HeaderMaintainer>
            </ItemMaintainer>
          );
        })}
    </ListMaintainers>
  );
};

export default List;
