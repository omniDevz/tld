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
import { useAuth } from '../../../../../contexts/auth';

const List: React.FC<ListProps> = ({ list }) => {
  const { user } = useAuth();

  return (
    <ListMaintainers>
      {list &&
        list.map(({ adminId, name, email, levelAccess, teacherId }) => {
          const labelLevelAccess =
            levelAccess < 2 ? 'Administrador' : 'Professor';
          const maintainerId = levelAccess < 2 ? adminId : teacherId;

          const routeUpdate = `/maintainer/update/${maintainerId}/${levelAccess}`;

          return (
            <ItemMaintainer key={adminId}>
              <HeaderMaintainer>
                <Infos>
                  <Name>
                    {name}
                    {(user?.levelAccess || 0) >= levelAccess && (
                      <Link to={routeUpdate} title={`Editar dados de ${name}`}>
                        <FiEdit />
                      </Link>
                    )}
                  </Name>
                  <Description>{email}</Description>
                </Infos>
              </HeaderMaintainer>
              <LevelAccess>{labelLevelAccess}</LevelAccess>
            </ItemMaintainer>
          );
        })}
    </ListMaintainers>
  );
};

export default List;
