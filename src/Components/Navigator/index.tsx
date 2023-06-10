import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Navigator(props: any) {
    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <Navbar>
                <NavbarBrand>
                    <Link to="/">
                        <img
                            src="https://images.tcdn.com.br/img/img_prod/730059/mini_mercadinho_de_madeira_rosa_atelie_materno_575_1_60639774f580f374fd2fef63dc69c70b.jpeg"
                            alt="Logo"
                            className="img-thumbnail"
                            style={{ width: "60px", height: "60px" }}
                        />
                    </Link>
                </NavbarBrand>
                <Nav className="me-auto desktop-menu" navbar style={{ width: "90%" }}>
                    <NavItem className="d-flex justify-content-between">
                        <div className="d-flex gap-3">
                            <Link to="/cadastrar" className="nav-link">
                                Cadastrar Produto
                            </Link>
                            <Link to="/estoque" className="nav-link">
                                Estoque
                            </Link>
                            <Link to="/vendas" className="nav-link">
                                Vendas Totais
                            </Link>
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navigator;