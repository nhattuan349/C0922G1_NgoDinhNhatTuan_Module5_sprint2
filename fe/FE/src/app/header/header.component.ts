import { Component, OnInit } from '@angular/core';
import {Team} from '../model/team';
import {Announcement} from '../model/announcement';
import {TokenStorageService} from '../service/token-storage.service';
import {ShareService} from '../service/share.service';
import {ProgressReportService} from '../service/progress-report.service';
import {Router} from '@angular/router';
import {AnnouncementService} from '../service/announcement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username?: string;
  img?: string;
  name?: string;
  role?: string;
  isLoggedIn = false;
  nameUser: string;


  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private route: Router) {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
      this.nameUser = this.tokenStorageService.getUser().name;
    }
    this.isLoggedIn = this.username != null;
  }

  ngOnInit(): void {
    this.loadHeader();

  }
  async logOut() {
    this.tokenStorageService.signOut();
    this.shareService.sendClickEvent();
    await Swal.fire({
      text: 'Đã đăng xuất',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#2b80dd',
      // showConfirmButton: false,
      timer: 2500
    });
    await this.route.navigateByUrl('/');
    location.reload();
  }
}
