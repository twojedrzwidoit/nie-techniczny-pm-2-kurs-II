import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Twoje zamówienia" id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <MenuItem icon="wrench" to="/entites/current" data-cy="settings">
      Biężace wypożyczenia
    </MenuItem>
    <MenuItem icon="wrench" to="/entites/archive" data-cy="settings">
      Archiwum wypożyczeń
    </MenuItem>
  </NavDropdown>
);
