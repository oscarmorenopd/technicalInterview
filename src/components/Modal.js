import React, { useState } from 'react';

export function ModalTODO() {    
    return (
        <div>
            <form>
                <input placeholder='Nombre'></input>
                <input placeholder='Descripción'></input>                
            </form>
        </div>
    )
}