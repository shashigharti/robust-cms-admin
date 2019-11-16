import M from 'materialize-css';


class AlertService {
    store(response) {
        response.then(response => {
            console.log('success', response);
            M.toast({ 'html': 'Successfully Added' });
            return true;
        }).catch(err => {
            console.log(err.response);
            M.toast({ 'html': 'Something went wrong !' });
            if (err.response.status == '422') {
                const errors = err.response.data.errors;
                Object.keys(errors).map(function (keys) {
                    errors[keys].map(function (message) {
                        M.toast({ 'html': message });
                    });
                });
            }
            return false;
        });
    }

    update(response) {
        response.then(response => {
            console.log('success', response);
            M.toast({ 'html': 'Successfully Updated' });
            return true;
        }).catch(err => {
            console.log(err.response);
            M.toast({ 'html': 'Something went wrong !' });
            if (err.response.status == '422') {
                const errors = err.response.data.errors;
                Object.keys(errors).map(function (keys) {
                    errors[keys].map(function (message) {
                        M.toast({ 'html': message });
                    });
                });
            }
            return false;
        });
    }
}

export const alertService = new AlertService();