import React, { useContext, useEffect, useState } from 'react';
import ToolBar from '../../Core/Components/ToolBar';
import * as constants from '../constants';
import { BannerContext } from '..';
import { apiService, alertService } from '../../Core';
import { EditResource } from '../../Core/Components/CRUD';

const EditBanner = (props) => {
    const { dispatch: pdispatch } = useContext(BannerContext);
    const [state, setState] = useState({
        id: '',
        name: '',
        slug: '',
    });

    useEffect(() => {
        M.AutoInit();
        M.updateTextFields();
    }, [state]);

    useEffect(() => {
        setState({
            id: props.payload.id,
            name: props.payload.name,
            slug: props.payload.slug
        });
    }, [props]);


    const handleSubmit = e => {
        event.preventDefault();
        const { id } = state;
        const response = apiService.update(constants.API_BANNER_UPDATE + id, state);
        const status = alertService.update(response);
    };

    const setFieldValue = (field, value) => {
        setState({
            ...state,
            [field]: value,
        });
        pdispatch({ type: 'SET_FIELD', current_page: { field, value } });
    };

    return (
        <div id="main">
            <ToolBar breadcrumbs={constants.BREADCRUMB_BANNER_EDIT} toolbar={constants.TOOLBAR} />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col s12">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col s12">
                                    <ul className="tabs">
                                        <li className="tab">
                                            <a className="active" href="#pages">
                                                Banners
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col s12">
                                    <div className="panel card tab--content">
                                        <div id="pages" className="col s12">
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <label>Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={state.name}
                                                        onChange={e => setFieldValue('name', e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="input-field col s6">
                                                    <label>Slug</label>
                                                    <input
                                                        type="text"
                                                        name="slug"
                                                        value={state.slug}
                                                        onChange={e => setFieldValue('slug', e.target.value)}
                                                    />                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                              <div className="input-field col s6">
                                                    <label>Templates</label>
                                                    <select
                                                        value={state.template}
                                                        name="template"
                                                        onChange={(e) => setFieldValue('template', e.target.value)}
                                                    >
                                                        <option value="" disabled>
                                                            Choose your option
                                                        </option>
                                                        <option value="two-col-ad">Two Column Ad</option>
                                                        <option value="full-screen-ad">Full Screen Ad</option>
                                                        <option value="slider">Slider</option>
                                                    </select>
                                                </div>
                                                <div className="input-field col s6">
                                                    <label>Status</label>
                                                    <input
                                                        type="text"
                                                        name="status"
                                                        value={state.status}
                                                        onChange={e => setFieldValue('status', e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <div className="input-field">
                                                        <button type="submit" className="btn gradient-45deg-purple-deep-orange">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditResource(EditBanner, constants.API_BANNER_EDIT);