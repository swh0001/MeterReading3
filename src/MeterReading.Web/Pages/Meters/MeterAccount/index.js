$(function () {

    var l = abp.localization.getResource('MeterReading');

    var service = meterReading.meters.meterAccount;
    var createModal = new abp.ModalManager(abp.appPath + 'Meters/MeterAccount/CreateModal');
    var editModal = new abp.ModalManager(abp.appPath + 'Meters/MeterAccount/EditModal');

    var dataTable = $('#MeterAccountTable').DataTable(abp.libs.datatables.normalizeConfiguration({
        processing: true,
        serverSide: true,
        paging: true,
        searching: false,
        autoWidth: false,
        scrollCollapse: true,
        order: [[0, "asc"]],
        ajax: abp.libs.datatables.createAjax(service.getList),
        columnDefs: [
            {
                rowAction: {
                    items:
                        [
                            {
                                text: l('Edit'),
                                visible: abp.auth.isGranted('MeterReading.MeterAccount.Update'),
                                action: function (data) {
                                    editModal.open({ id: data.record.id });
                                }
                            },
                            {
                                text: l('Delete'),
                                visible: abp.auth.isGranted('MeterReading.MeterAccount.Delete'),
                                confirmMessage: function (data) {
                                    return l('MeterAccountDeletionConfirmationMessage', data.record.id);
                                },
                                action: function (data) {
                                    service.delete(data.record.id)
                                        .then(function () {
                                            abp.notify.info(l('SuccessfullyDeleted'));
                                            dataTable.ajax.reload();
                                        });
                                }
                            }
                        ]
                }
            },
            {
                title: l('MeterAccountMeterName'),
                data: "meterName"
            },
            {
                title: l('MeterAccountMeterLevel'),
                data: "meterLevel"
            },
            {
                title: l('MeterAccountFatherMeterID'),
                data: "fatherMeterID"
            },
            {
                title: l('MeterAccountIsVirtual'),
                data: "isVirtual"
            },
            {
                title: l('MeterAccountSpareFor'),
                data: "spareFor"
            },
            {
                title: l('MeterAccountReader'),
                data: "reader"
            },
            {
                title: l('MeterAccountUserName'),
                data: "userName"
            },
            {
                title: l('MeterAccountRouteNO1'),
                data: "routeNO1"
            },
            {
                title: l('MeterAccountRouteNO2'),
                data: "routeNO2"
            },
            {
                title: l('MeterAccountRouteNO3'),
                data: "routeNO3"
            },
            {
                title: l('MeterAccountPlantID'),
                data: "plantID"
            },
            {
                title: l('MeterAccountMediaTypeID'),
                data: "mediaTypeID"
            },
            {
                title: l('MeterAccountUserTypeID'),
                data: "userTypeID"
            },
            {
                title: l('MeterAccountReportCycleID'),
                data: "reportCycleID"
            },
            {
                title: l('MeterAccountMeterID'),
                data: "meterID"
            },
            {
                title: l('MeterAccountMagnification'),
                data: "magnification"
            },
            {
                title: l('MeterAccountPeak'),
                data: "peak"
            },
            {
                title: l('MeterAccountValley'),
                data: "valley"
            },
            {
                title: l('MeterAccountFlat'),
                data: "flat"
            },
            {
                title: l('MeterAccountValue'),
                data: "value"
            },
            {
                title: l('MeterAccountPerValue'),
                data: "perValue"
            },
            {
                title: l('MeterAccountDiffValue'),
                data: "diffValue"
            },
            {
                title: l('MeterAccountAdjustment'),
                data: "adjustment"
            },
            {
                title: l('MeterAccountReportValue'),
                data: "reportValue"
            },
            {
                title: l('MeterAccountPerReportValue'),
                data: "perReportValue"
            },
            {
                title: l('MeterAccountDiffReportValue'),
                data: "diffReportValue"
            },
            {
                title: l('MeterAccountTemperature'),
                data: "temperature"
            },
            {
                title: l('MeterAccountPressure'),
                data: "pressure"
            },
            {
                title: l('MeterAccountCurrentCycle'),
                data: "currentCycle"
            },
            {
                title: l('MeterAccountBalanceRatio'),
                data: "balanceRatio"
            },
            {
                title: l('MeterAccountIsBalance'),
                data: "isBalance"
            },
            {
                title: l('MeterAccountIsEnable'),
                data: "isEnable"
            },
            {
                title: l('MeterAccountSort1'),
                data: "sort1"
            },
            {
                title: l('MeterAccountSort2'),
                data: "sort2"
            },
            {
                title: l('MeterAccountSort3'),
                data: "sort3"
            },
            {
                title: l('MeterAccountSort4'),
                data: "sort4"
            },
            {
                title: l('MeterAccountSort5'),
                data: "sort5"
            },
        ]
    }));

    createModal.onResult(function () {
        dataTable.ajax.reload();
    });

    editModal.onResult(function () {
        dataTable.ajax.reload();
    });

    $('#NewMeterAccountButton').click(function (e) {
        e.preventDefault();
        createModal.open();
    });
});
