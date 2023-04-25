import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ChangePassService} from '../../../service/change-pass.service';
import {TokenStorageService} from '../../../service/token-storage.service';
import {AccountDto} from '../../../model/account-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  account: AccountDto = {};

  @Input()
  changePassForm?: FormGroup;


  constructor(
    private changePassService: ChangePassService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenStorageService,
  ) {
  }

  ngOnInit(): void {
  }

  async changePass() {
    if (!this.changePassForm) {
      return;
    }
    const idAccount = this.tokenService.getToken();
    // @ts-ignore
    this.account.accountId = idAccount;
    this.account.newPass = this.changePassForm.value.newPass;

    this.changePassService.changePass(this.account).subscribe(
      // @ts-ignore
      await Swal.fire({
        text: 'Đã đăng xuất',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#2b80dd',
        // showConfirmButton: false,
        timer: 2500
      })
    );
    await this.router.navigateByUrl('/');
    location.reload();
    // console.log(this.account);
  }
}
