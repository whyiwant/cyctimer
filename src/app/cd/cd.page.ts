import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.page.html',
  styleUrls: ['./cd.page.scss'],
})
export class CdPage implements OnInit {

  countdown: String = "";

  constructor(private route: ActivatedRoute, private changeRef: ChangeDetectorRef) {
    let routeParams = this.route.snapshot.paramMap;
    let cd = routeParams.get('countdown');
    console.log(cd);

    let d = new Date();
    console.log(d);
    d.setMinutes(d.getMinutes() + Number.parseInt(cd));
    console.log(d);

    setInterval(() => {
      let distance = d.getTime() - new Date().getTime();

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdown = minutes + "m " + seconds + "s ";
      this.changeRef.detectChanges();

    }, 1000)
  }

  ngOnInit() {
  }

}
