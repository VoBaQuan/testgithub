import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'app-mass-delivery',
  templateUrl: './mass-delivery.component.html',
  styleUrls: ['./mass-delivery.component.scss']
})
export class MassDeliveryComponent implements OnInit {
  expandSet = new Set<number>();

  listOfData = [
    // id = 1
    {
      id: 1,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'Chuẩn bị hàng',
      expand: false,
    },
    // id = 2
    {
      id: 2,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã Hủy',
      paymentstatus: 'Chưa thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: '',
      expand: false,
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    // id = 3
    {
      id: 3,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đang giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: '',
      expand: false,
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    // id = 4
    {
      id: 4,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Chờ xác nhận',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'Xác nhận',
      // operrationcomfirm:'Xác nhận',
      // operrationcancel: 'Huỷ đơn hàng',
      expand: false,
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    // id = 5
    {
      id: 5,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Chờ lấy hàng',
      paymentstatus: 'Chưa thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In Phiếu ship',
      expand: false,
      description: 'QUẬN ĐẸP TRAI DỄ THƯƠNG'
    },
    {
      id: 6,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 7,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 8,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 9,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 10,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 11,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 12,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 13,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 14,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 15,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 16,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 17,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 18,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 19,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 20,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 21,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 22,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 23,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 24,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 25,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },
    {
      id: 26,
      orderCode: 'DH 023165',
      customer: 'SunHappy',
      phonenumber: '+84941641408',
      total: '1.500.000',
      orderstatus: 'Đã giao hàng',
      paymentstatus: 'Đã thanh toán',
      trans: 'Giao hàng tiết kiệm',
      orderdate: '30/08/2021',
      operration: 'In phiếu ship',
      expand: false,
    },

  ];
  inforOrders = [
    {
      id: '1',
      ordercode: 'T1261964567',
      productname: 'Giày thể thao hiphop đen trắng',
      productcode: '0910232',
      unitprice: '1.500.000',
      quality: '1',
      total: '1.500.000'
    },
    {
      id: '2',
      ordercode: 'T1261964567',
      productname: 'Giày thể thao hiphop đen trắng',
      productcode: '0910232',
      unitprice: '1.500.000',
      quality: '1',
      total: '1.500.000'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {
    console.log(value);
  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
