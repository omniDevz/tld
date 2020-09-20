import React, { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

import { CollapseProps } from './interface';
import { CollapseWrapper, CollapseHeader, Text, CollapseBody } from './styled';

const Collapse: React.FC<CollapseProps> = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <CollapseWrapper isOpen={isOpen}>
      <CollapseHeader onClick={handleIsOpen}>
        <Text>{label}</Text>
        <FiChevronUp />
      </CollapseHeader>
      {children && <CollapseBody>{children}</CollapseBody>}
    </CollapseWrapper>
  );
};

export default Collapse;
