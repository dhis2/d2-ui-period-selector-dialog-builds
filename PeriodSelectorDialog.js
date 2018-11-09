import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PeriodSelector from './PeriodSelector';

var styles = {
    dialogContent: {
        overflow: 'hidden' // TODO: Reflow DOM or enforce minimum dialog sizing rather than hiding important UI elements on small screens
    }
};

var PeriodSelectorDialog = function (_React$Component) {
    _inherits(PeriodSelectorDialog, _React$Component);

    function PeriodSelectorDialog(props) {
        _classCallCheck(this, PeriodSelectorDialog);

        var _this = _possibleConstructorReturn(this, (PeriodSelectorDialog.__proto__ || _Object$getPrototypeOf(PeriodSelectorDialog)).call(this, props));

        _this.onCloseClick = function () {
            _this.props.onClose();
        };

        _this.onUpdateClick = function () {
            _this.props.onUpdate(_this.props.selectedItems);
        };

        _this.onSelect = function (selectedPeriods) {
            _this.props.onSelect(selectedPeriods);
        };

        _this.onDeselect = function (removedPeriods) {
            var selectedPeriods = _this.props.selectedItems.filter(function (period) {
                return !removedPeriods.includes(period) && period;
            });

            _this.props.onDeselect(selectedPeriods);
        };

        _this.render = function () {
            var _this$props = _this.props,
                classes = _this$props.classes,
                open = _this$props.open,
                maxWidth = _this$props.maxWidth,
                fullWidth = _this$props.fullWidth,
                remaindingProps = _objectWithoutProperties(_this$props, ['classes', 'open', 'maxWidth', 'fullWidth']);

            return React.createElement(
                Dialog,
                {
                    open: open,
                    onClose: _this.onCloseClick,
                    fullWidth: fullWidth,
                    maxWidth: maxWidth
                },
                React.createElement(
                    DialogTitle,
                    null,
                    _this.i18n.getTranslation('Period')
                ),
                React.createElement(
                    DialogContent,
                    { className: classes.dialogContent },
                    React.createElement(PeriodSelector, remaindingProps)
                ),
                React.createElement(
                    DialogActions,
                    null,
                    React.createElement(
                        Button,
                        { color: 'primary', onClick: _this.onCloseClick },
                        _this.i18n.getTranslation('Hide')
                    ),
                    React.createElement(
                        Button,
                        { variant: 'contained', color: 'primary', onClick: _this.onUpdateClick },
                        _this.i18n.getTranslation('Update')
                    )
                )
            );
        };

        _this.i18n = _this.props.d2.i18n;
        return _this;
    }

    return PeriodSelectorDialog;
}(React.Component);

PeriodSelectorDialog.defaultProps = {
    maxWidth: 'md',
    fullWidth: true,
    onSelect: function onSelect() {
        return null;
    },
    onDeselect: function onDeselect() {
        return null;
    },
    selectedItems: []
};

PeriodSelectorDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    d2: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    fullWidth: PropTypes.bool,
    maxWidth: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    selectedItems: PropTypes.array
};

export default withStyles(styles)(PeriodSelectorDialog);