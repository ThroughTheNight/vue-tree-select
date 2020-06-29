# @bieyanghong/vue-select-tree

![example][base64str]

## Installation
```
npm install @bieyanghong/vue-select-tree --save
```

### Usage
```js
import tree from '@bieyanghong/vue-select-tree'
import '@bieyanghong/vue-select-tree/lib/vue-tree-select.css'
Vue.use(tree)
```

### Example
```vue
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <tree width="240px" :dataSource="treeData" @change="handleChange" />
  </div>
</template>

<script>

export default {
  name: 'Home',

  data() {
    return {
      treeData: [
        {
          label: '总部1',
          id: 1,
          type: 'organization',
          children: [
            {
              label: '产品1',
              id: 2,
              type: 'department'
            },
            {
              label: '技术1',
              id: 3,
              type: 'organization',
              children: [
                {
                  label: '大前端组',
                  id: 4,
                  type: 'department'
                },
                {
                  label: '后台组',
                  id: 5,
                  type: 'department'
                },
              ]
            },
            {
              label: '销售',
              id: 7,
              type: 'department'
            },
          ]
        }
      ]
    }
  },
}
</script>
```

### Params
|  key                     | description            | default  |
|  ----------------------  | ---------------------  | -------- |
|  palceholder             | 选择框默认文字	          | 请选择    |
|  dropdownWidth           | 下拉弹框宽度             | 220px    |
|  mode                    | default 表示单选， multiple 表示多选  | default    |
|  dataSource              | 数据源                  | []       |
|  allowSelectOrganization | 单选时是否可以选择部门     | false    |
|  defaultValue             | 单选时默认值             | number   |
|  value                   | 单选时指定选中            | number   |
|  defaultMulValue          | 多选时的默认值            | number[] |
|  mulValue                | 指定当前选中的条目         | number[] |
|  maxTagCount             | 最多显示多少个tag         | number   |


[base64str]:data:image/jpg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABGKADAAQAAAABAAABaQAAAAD/4gIkSUNDX1BST0ZJTEUAAQEAAAIUYXBwbAQAAABtbnRyUkdCIFhZWiAH5AAGABwACAA3AB1hY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGz77q3lD6D4iEOfWDCuW8BiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAGZjcHJ0AAABZAAAACN3dHB0AAABiAAAABRyWFlaAAABnAAAABRnWFlaAAABsAAAABRiWFlaAAABxAAAABRyVFJDAAAB2AAAABBjaGFkAAAB6AAAACxiVFJDAAAB2AAAABBnVFJDAAAB2AAAABBkZXNjAAAAAAAAAAxSVEsgRkhEIEhEUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAAQ29weXJpZ2h0IEFwcGxlIEluYy4sIDIwMjAAAFhZWiAAAAAAAADzUgABAAAAARa+WFlaIAAAAAAAAG+kAAA49gAAA5FYWVogAAAAAAAAYpQAALeGAAAY2lhZWiAAAAAAAAAkngAAD4QAALbCcGFyYQAAAAAAAAAAAAH2BHNmMzIAAAAAAAEMPwAABd3///MoAAAHkQAA/ZH///uj///9owAAA9sAAMB5/8AAEQgBaQEYAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAEv/aAAwDAQACEQMRAD8A/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0P38ooooAKKKgubq3tIzNcyCNB3NNJt2Qm0ldk9FYf8Awkmi/wDPx/44/wDhR/wkmi/8/H/jj/4Vv9Uq/wAj+5mX1mn/ADL7zcorD/4STRf+fj/xx/8ACj/hJNF/5+P/ABx/8KPqlX+R/cw+s0/5l95uUVh/8JJov/Px/wCOP/hR/wAJJov/AD8f+OP/AIUfVKv8j+5h9Zp/zL7zcorD/wCEk0X/AJ+P/HH/AMKP+Ek0X/n4/wDHH/wo+qVf5H9zD6zT/mX3m5RWH/wkmi/8/H/jj/4Uf8JJov8Az8f+OP8A4UfVKv8AI/uYfWaf8y+83KKw/wDhJNF/5+P/ABx/8KP+Ek0X/n4/8cf/AAo+qVf5H9zD6zT/AJl95uUVh/8ACSaL/wA/H/jj/wCFH/CSaL/z8f8Ajj/4UfVKv8j+5h9Zp/zL7zcorD/4STRf+fj/AMcf/Cj/AISTRf8An4/8cf8Awo+qVf5H9zD6zT/mX3m5RWH/AMJJov8Az8f+OP8A4Uf8JJov/Px/44/+FH1Sr/I/uYfWaf8AMvvNyisP/hJNF/5+P/HH/wAKP+Ek0X/n4/8AHH/wo+qVf5H9zD6zT/mX3m5RWH/wkmi/8/H/AI4/+FH/AAkmi/8APx/44/8AhR9Uq/yP7mH1mn/MvvNyisP/AISTRf8An4/8cf8Awo/4STRf+fj/AMcf/Cj6pV/kf3MPrNP+ZfeblFYf/CSaL/z8f+OP/hR/wkmi/wDPx/44/wDhR9Uq/wAj+5h9Zp/zL7zcorEXxFozEKLgZPqrD+YrZVldQ6EMp5BHINZ1KM4/Emi4VYy+F3HUUUVmWFFFFAH/0f38ooooAK8W+JkC6x4o8IeFb1mOnavfNHcxqzJ5kcVpdXOwlSDtZ4EDD+JcqeCa9prx3xv/AMlL+H3/AGEZv/TZqNe7w82q8pLdQm15NQbT9U9TyM7V6Ki9nKCfmnJJr5o2/wDhTvwj/wChI0P/AMFtt/8AG6zJfhX8KhPJFD4C0FxEQCWsLZeSA3AEJ7GvWqwJHEc97IQWCuDhRknEa9AOprm/tzG/8/5/+BP/ADN/7Jwn/PqP/gKOC/4VX8MP+hA8P/8AgDb/APxij/hVfww/6EDw/wD+ANv/APGK8y179onStJ8c+F/Cf9j6tF/byXzGKbSLxbmT7LGrgQJtBbG4l/lbAHarnxE+MPiTRNK0qbwXoBuL3WfO8mHUrfU47hTbMpkza2llcS7Ch4digBIOGHB0/tfH6fvp/wDgT/zI/s3B/wDPqP8A4Cv8j0H/AIVX8MP+hA8P/wDgDb//ABij/hVfww/6EDw//wCANv8A/GK8w8I/GTxf4h1qyabTdFm0bWVjNp9i1G6luoz9hXUD5izWMKlpIZYmRD5e0HkknC8Tqf7Tmr6ZpEF1c6fYRXDtKjFrqFEzIbO5smXzp4gVlsrnc+12KzbVHGcNZtj729tL/wACf+Yv7Nwe/so/+Ar/ACPoX/hVfww/6EDw/wD+ANv/APGKP+FV/DD/AKEDw/8A+ANv/wDGK8ku/wBocW+n+FLsaeZpPEeoXsZS2ja7220M7Q20KvC5h+13Be3XDSiNS0jFtqcp8O/jd4g8XeLtH0S+gjW31f8AtDKjS9QtRD9jJC7Ly4/0e43Y58r6jil/a2P39tP/AMCf+Y/7Nwe3so/+Ao9c/wCFV/DD/oQPD/8A4A2//wAYpB8LfhWrJ53gHQAjMq5WwtmI3HA4MI7n1re1jxl4Y8PajFpeu6hHYTzWtzep5+Y42gswpnYSMAn7tWDMu7cFy2NoJGlZ6laaxplhq1gWa2vfs00RdHiYpIyspKSBXU4PRgCOhANR/beN/wCf0/8AwJ/5lf2ThP8An1H/AMBRytz8KvhRFP5EPgPQXIUMS2n2yj5iQOkR9DUX/Cq/hh/0IHh//wAAbf8A+MV6HP8A8hGT/rlH/wChPXzFqXxs8SnxJr2i2GnyW8Gj3z2STR6DrWrh9iIxcvYweTnLY2CXIxzinHOcc9q8/wDwJ/5illeEW9KP/gKPWv8AhVfww/6EDw//AOANv/8AGKP+FV/DD/oQPD//AIA2/wD8Yrh7741W3hrwAPEmsQXup6lJcmxgiGh6lpAnuXUug8m8WSWOFV+/MSy8Nty+I6NB+OWlz6v4d8OarBdTSatH5M2qJpeoWOnJqHy7IQ93CEVZyWEX75mLAJjLCq/tfH/8/p/+BP8AzF/ZmD/59R+5Hcf8Kr+GH/QgeH//AABt/wD4xR/wqv4Yf9CB4f8A/AG3/wDjFeEXv7SV/cXt/ZaNp8kYi1xdNSSTS765MNsYZmR3ghxNNLM9u8iLChCQMjSEMcV7h8JvGl/498JtrupRrHPHfX1mdtvPabhaXDwq5guf30RYLko/INEs3xyV3Wn/AOBP/MI5Zg27KlH/AMBRP/wqv4Yf9CB4f/8AAG3/APjFWLT4UfCaeSSKXwJoUbxhTxp1swIbOOfKHpU+k/ETwbrlzYWWlaktxc6k95HDEI5BLu09/LuhIhUNF5T4RvMC4YqvVlB7ex/4/bj/AK5xfzeoed43rWn/AOBP/MpZVhH/AMuo/wDgKOP/AOFO/CP/AKEjQ/8AwW23/wAbo/4U78I/+hI0P/wW23/xuvRqKX9uY3/n/P8A8Cf+Y/7Jwn/PqP8A4Cjzn/hTvwj/AOhI0P8A8Ftt/wDG6P8AhTvwj/6EjQ//AAW23/xuvRqKP7cxv/P+f/gT/wAw/snCf8+o/wDgKPOf+FO/CP8A6EjQ/wDwW23/AMbo/wCFO/CP/oSND/8ABbbf/G69Goo/tzG/8/5/+BP/ADD+ycJ/z6j/AOAo85/4U78I/wDoSND/APBbbf8Axuj/AIU78I/+hI0P/wAFtt/8br0aij+3Mb/z/n/4E/8AMP7Jwn/PqP8A4CjzG7+DHwquLaWC18K6bp0silVubK0itbmIkcPFNEqujDqCCKT4N6vfa98NtB1fUX8y5u7O2mkPT55YEkbA/wB5jXp9eO/AL/kkfhf/ALB1l/6SxV6DxdWvl9V15uTjKFrtu11O9r97L7jiWGp0cbTVKKjeMr2Vr2cbX9Lv7z2Kiiivmz3QooooA//S/fyiiigArx3xv/yUv4ff9hGb/wBNmo17FXjnjoiP4jeAJnO2NdSkBY8AF9Ov0Xn3Zgo9yB3r3OH/AONP/BU/9IkeRnP8KH+OH/paPY6wJHaOe+dUMhVwQq4yxEa8DJAyfcgVv1iyxXUdzO6QNKsrBgVK/wB0Lg7mHpXhnrnhkvw51rxmdU8X+InXRvEN6tn/AGSoAnOkrYSNcQCQqwWSSSVibkRsEdMQhmVfMbiviZ4M8a/Ea38L3+veHYUu9Fj1Rru2EVtqcMkoWNIjbrcSwqRPtLRmQoyjhwpr6m/0v/n0k/OP/wCLo/0v/n0k/OP/AOLrRVWnch00fI3wz+GfjTwZqfhK2u9Lkl+wW0N5eT+ZAtvDPHoNnpX2VWErSO5lti+8RBAp+8SOfNtZ+AHxUl8O2Hh7ynMVtHJNHHp2rTQqstt/ZsNkZ3BtRJNHFasVO0qhXKnJBr9Av9L/AOfST84//i6P9L/59JPzj/8Ai6r28r3JdJbHyLD8M/iHe+GvC8NxbahLd6DfazcLHd67JE6xzXUq2zNLGLieaX7M22LFzEER2VpFzgZ/wy8EfEPQ/FPhC81fw/rsMGmtqIuvtd/ps1lbi83FGgihuWkAGQG+Un0Br7K/0v8A59JPzj/+Lo/0v/n0k/OP/wCLo9s9h+yR4l8YfhTqHxdbT9DvbyHTtE0zffRyogmujqiqyWxKSIY/s8YZmkXcTNkRsBHvEnqekNrzaHpp8UR20er/AOj/AGpbN3kt/O3rv8ppFR9hPI3LkdDnqdr/AEv/AJ9JPzj/APi6aYruZo0Nu0YEiMWYpgBWDHoxPb0rNydrFqOtyWf/AJCMn/XKP/0J6+On+Hvi9dbtb/xB4Y1LWre/i1K9nt9P1YWK213fag88cchW6gEjx27LGWBYZU44Ir7HuorgXhnjiMqvGq/KVBBUsf4iPWov9L/59JPzj/8Ai6cJ2FKNz5VHhPx4vwfj0NNI1ZLr/hI2nNguqlb4aWdSaQR/bVuc4+z4/wCW2dvHtU+ieDNbtvHnhS9sPC2u6RYW13O+oSahr8mpW7Q/Y5xErQSXtwCRceUytsyrAHIr6j/0v/n0k/OP/wCLo/0v/n0k/OP/AOLqvasXs0fFWvfC34i22swapaaTq13Dc69Lqs8tlrkD34Bhmi3bLgWlrExEkcaBPNYRJsMigKp90+CGjeIvD/hS/wBN8R6be6fcHVdRuY/7QntrieaG7uHnjd3tpJV3Yfa2SDuBwCME+w/6X/z6SfnH/wDF0f6X/wA+kn5x/wDxdKVVtWBU0nc+fPBXwq8W+FviDc/Eya5sZdS8Ws6+IbZNwhijiXFmbGTyg7NEqrHL5gTz8mU7CiJX0TY/8ftx/wBc4v5vUP8Apf8Az6SfnH/8XVmxinE8080ZiDqigEgn5SxJ+Ukd6mUr7lRjY06KKKkYUUUUAFFFFABRRRQAV478Av8Akkfhf/sHWX/pLFXr000VvE887iOONSzMxwFUDJJPYAV5J8Bo5IfhP4ZilUo6afZggjBBFtECD+Ne5hv+RdX/AMcPymeRiP8AfqX+Gf5wPX6KKK8M9cKKKKAP/9P9/KKKKACuU8V+GdF8V6edO1iISR5Vh6hlIZSCMEFWAKkEEEAgg11LnArPt5d14yf7JP6itaFedKaqU3ZrZozrUY1IuE1dM8gPwp08cf8ACRa4P+41qn/yZR/wqrT/APoY9c/8HWqf/Jle40V6/wDrLj/+f0vvPN/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keHf8Kq0/8A6GPXP/B1qn/yZR/wqrT/APoY9c/8HWqf/Jle40Uf6y4//n9L7w/sHB/8+keGn4Q6FdKYNR1bVNQtn4kgutT1C5gkX+68U1y8bj2ZSPavZNPtraxtUtLVdscYwKvVlwS7ppV9HYfka48ZmuJxCUa9RyS7nThcuoUG3Sgk32NSikHSlrzztCiiigD/1P38ooooAZJ92si0/wCQi3/XM/zFa8n3ayLT/kIt/wBcz/MUAbVcp438ceE/hv4YvfGfjjUo9I0XTwhnuZdxVN7BFGFDMSzMAAASSa6uuO8f+AvCvxP8H6n4E8a2K6ho2rReXPExIPBDK6sOVdGAZWHIYAinG19RO9tD56/4bs/ZP/6KDbf+At5/8Yr6L8EeOPCfxI8MWXjPwPqUer6LqAcwXMW4K+xijDDBWBVlIIIBBFfiB/w7C+JX/C6v+EW+3L/wrvd5/wDbm+Pz/s2f9R5Gd32n+HO3y/48/wAFftz4A8BeFfhh4P0zwJ4KsV0/RtJi8uCJSSeSWZ2Y8s7sSzMeSxJNdOIhSilyO5hRnUbfOrGZ8VfEHifwt4Gvtc8H2y3WpQS2a4a0nvxFby3UUdzcfZbZ0mn+zwNJN5UbB32bV5IpPhP4i8S+LPAlhr/i23W31C5luwNlrNYrNbR3MsdrcC1uXeaD7RbrHN5UjF037W5FfOerfFTRLnXfFx12HxLcpfXlxZ6BHBcxWttcNYXlnoFxb2yQXkZ3f2rcDL3qxBhKCreUhITw98UtCs9S8Ix6bB4mhk0+5tbLXlkuori1tpb68u9Ahguo57yTrqlu21rJZAoj3FhE3zT7J8trFc+p9jajf2ulafc6pfP5dtZxPNK2C21I1LMcDJOAOg5r5Rb9pTXv+EJTxIvg/Ugx1AFrv+y9QNgNC8zzTqe7yBJg2nIixu83j/V/PXt3xe1250LwFf8A2DTW1e91R4NLt7UbgJJdRmS1Xe6AlI18zfI/8KqTX59Nqvw809tQ8La94w1K30LS5tc8PXGhp4ruf7VEtleiy09Y7KS5Rpory3yfLVBjK4YqeCjTTV2FWbT0Ptr4qfFzX/CekeHJvAHhmTxRfeLnEWnZuLa0tzKY/tCxytczQsGlhWRk2g8pgjJAPj2r/tZeKfsH9p+GPh9HPELeKYRalrEdrPcSXGoNpkEVqLS3vo5TLcLhSZEBHzDKkMfOviidL8U+GPhVZfEHSrHwvqCNqOmXb6lpl1qS2s+kp5Z+yxpLC7RSvHuily2Yypzya8g8J6V/aWga1p3w/wDDx1DWYrC4TQ30O1+xxR6lpOvX0enX7xXE2YIs20RmBdsKxUqQSK2hSjbVGcqkr6M/SmL4taDP8UYfhRFYagNRms7u8F3JavDZEWTwJLHHLLtMrD7Qh3RqyDkFtwKj1OvCte0jWp/2hPAmt/YpZLK08O+IIbi5jjdreKee40xo42kxtVnEblASCwViBwce61yTS0sdEb63CiiioKCiiigAooooAKKKKACiiigAooooAKKKKACsO1/4+Z/+uj/zNblYdr/x8z/9dH/maANsdKWkHSloAKKKKAP/1f38ooooAZJ92si0/wCQi3/XM/zFa8n3ayLT/kIt/wBcz/MUAbVFFFABRRRQB59N8JPhVcXOsXlx4M0WWfxCCupyNp1sz3wLiQi5YpmYF1DfPn5gD1FEPwk+FVvc6PeW/gzRYp/DwC6ZIunWyvYgOZALZgmYQHYt8mPmJPU16DRVc77i5UFVDYWLXH2xraMzjnzCi7+OPvYzVuipGRtFE8iSuis8edrEAlc8HB7ZqOKztIZWmhgSORs5ZVAY5YsckerEn6kmrFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFYdr/AMfM/wD10f8Ama3Kw7X/AI+Z/wDro/8AM0AbY6UtIOlLQAUUUUAf/9b9/KKKKAGSfdrItP8AkIt/1zP8xWvJ92si0/5CLf8AXM/zFAG1RRRQAUUUUAFFfm34k8b+J9a8R6dLfa9dz6pZz3st7gJb2Ph2SHWLe2hmSWBEZreS0S43iZ5RIgU7oy4D/orpeq6Zrmm2us6LeQ6hp97Gs1vcW8iywzROMq8boSrKwOQQSCOlaTp8pEZ3Jry8tNOtJ7/UJ0trW2RpJZZWCRxxoMszM2AqgDJJOAKnR0kRZI2Do4BBByCD0INfCvxm8AeLfi/8XNV8KeEwsFvoNnpVzqf2nX9asbe/t7/7ZE1mbWxk8lVKw7ncKrklckqSD03wT+BvxJ+HHjI6rrs1rNo5kkEEEfiLXb1bC1+zLFHbw2t4xgkAkXeXlyy722EBUUU6ate+oud3tY+xcj1pa/KnxVqfw48VePPF3xLfRND1bT/EUC6zbT+KfB+oXMptNNtbSymW0uG8tZk3BXCxgnMnGc19H/Ae0sbr4RXvwj0PVNS8M6p4cluLm8+zaVLo0kMOq3d1eRRWsN/E7RxbS0asoLKF+VlbBDlQsrijVu7H2PRXin7N2pajrHwA+Heq6vdS317eaDp8s887tLLLI8Clnd2JZmJ5JJJJr2uspRs2jSLurhRRRUjCiiigAooooAKKKKACiiigAooooAKKKKACsO1/4+Z/+uj/AMzW5WHa/wDHzP8A9dH/AJmgDbHSlpB0paACiiigD//X/fyiiigBkn3ayLT/AJCLf9cz/MVryfdrItP+Qi3/AFzP8xQBtUUUUAFcl458JW/jrwxdeFby5e2tL94BcGMAmSCOZJJoTn+GaNWib/ZY11tFNO2oNHmOv/CHwJrOh6Zo1lpNrpDaBIk2kz2dvFFJp0qOJAbYqo8sMRiRVxvUsD1zXX+GfDWk+EdIXQtDjaKyjmuJkRnL7TczPO6qWyQoaQhV6KuFHAFb9FDk7WFyrc4Dwr4Jl0DxV4u8WXt99uuvE91bugEflrbWtpbpDDAOSWw3mSFieS54AAFd/RRQ3cErHxK/7KHi6fwtp3he++IP2q30nQ9Q0e0DaZEgtzeyWziRdjhnCfZwNrls5HI5z7x4C+GniDwv4m8U+JvE/iZvEdx4kgsIAzWkVo0KWQmGMRHY27zuDtBGOc9vYqKuVWTVmSqaWxyXgLwbpfw78E6F4D0SWabT/D9lBYwPcMrTNFboEUyFFRSxA5IUDPQCutooqG76lpBRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKw7X/j5n/wCuj/zNblYdr/x8z/8AXR/5mgDbHSlpB0paACiiigD/0P38ooooAZJ92si0/wCQi3/XM/zFa8n3ayLT/kIt/wBcz/MUAbVFFFABRRXKeN/HHhP4b+GL3xn441KPSNF08IZ7mXcVTewRRhQzEszAAAEkmmlfQGzq6K+Sf+G7P2T/APooNt/4C3n/AMYr6L8EeOPCfxI8MWXjPwPqUer6LqAcwXMW4K+xijDDBWBVlIIIBBFVKnJatExnF7M6uivO/ir4g8T+FvA19rng+2W61KCWzXDWk9+IreW6ijubj7LbOk0/2eBpJvKjYO+zavJFJ8J/EXiXxZ4EsNf8W262+oXMt2BstZrFZraO5ljtbgWty7zQfaLdY5vKkYum/a3Ipculx82tj0WiuL+Ivi+PwF4I1rxc9vLdHTLWaZI4YJrks6IWUMkCO4TIG5sYUZJIAJrxPXv2irvTPCfhfxHp/g/V7z+3rrSIHc2TwRD+0JkikEaztHLvBY+XuQK52kEqQxcabewnNLc+oKK86ufih4Z0nS7HU/E6XWgHUDKIoLy3fz/3JAYssIkA6gjJ5B+tfPHhf9sDwn4o1p49Gns9W0m31i70+6ksnlee3tAga0vShUq8bsrq4DBuhRWwwpqlJ6pCdRLdn2ZRXlsXxa0Cf4ow/CiGx1D+0JrO7vBdyWrw2TCyeBJY45ZdplYfaEJaNWQcgvuBFepVDi1uUmmFFFFIYUUUUAFFFFABRRRQAUUUUAFFFFABWHa/8fM//XR/5mtysO1/4+Z/+uj/AMzQBtjpS0g6UtABRRRQB//R/fyiiigBkn3ayLT/AJCLf9cz/MVryfdrItP+Qi3/AFzP8xQBtUUUUAFcd4/8BeFfif4P1PwJ41sV1DRtWi8ueJiQeCGV1Ycq6MAysOQwBFdjRTTtqgaPwV/4dhfEr/hdX/CLfbl/4V3u8/8AtzfH5/2bP+o8jO77T/Dnb5f8ef4K/bnwB4C8K/DDwfpngTwVYrp+jaTF5cESkk8kszsx5Z3YlmY8liSa7Gitq2JlOykY0qEYbHxdq3xU0S513xcddh8S3KX15cWegRwXMVrbXDWF5Z6BcW9skF5Gd39q3Ay96sQYSgq3lISE8PfFLQrPUvCMemweJoZNPubWy15ZLqK4tbaW+vLvQIYLqOe8k66pbttayWQKI9xYRN830jN8JPhVcXOsXlx4M0WWfxCCupyNp1sz3wLiQi5YpmYF1DfPn5gD1FEPwk+FVvc6PeW/gzRYp/DwC6ZIunWyvYgOZALZgmYQHYt8mPmJPU0/aRsHJK5yX7R1zJZ/BXxbcr4kh8KolhceZeTJE6srRsvkr55CBpiQinBOT8oJIr4Y+JfhLwpo+meD4fCOjXHxM8XaZoBh1HRrmW+1Ca0a4iW7tNQuGi8zyjbzZCQttZ4ZNsC5jjWv1QmghuIzFcRrKhwSrAMMg5HB9DTkiijZ3RArSHcxAwWIAGT6nAA+gqadblHOnzHx94eS/wBQ+DvhH4QfBXU5dXs9RsJLLUPFWSEsIocJevtY+Yt/I7ssMDAGJss+BHtbi/AngrU/h1c+I/iH8JtIF0PDWualpF9oluAr3+jRGFokt8kD7TZkM9urcOHkjyC4YfeqRxxgiNQu4ljgYyT1P1NNighg3+TGsfmMXbaANzHqTjqT60e23H7M8P17TNVu/wBoTwJr8FhcHTrbw74gimuPKbyoZZ7jTGijkcDaruEcqpOTtbGcHHutFFZuV7FpBRRRUjCiiigAooooAKKKKACiiigAooooAKw7X/j5n/66P/M1uVh2v/HzP/10f+ZoA2x0paQdKWgAooooA//S/fyiiigBkn3ayLT/AJCLf9cz/MVryfdrItP+Qi3/AFzP8xQBtUUUUAFFFFABRRRQAUUUUAFFRyyxQRPPO6xxxqWZmICqoGSSTwAB1NEM0VxEk9u6yRSKGR1IZWUjIII4II6GgCSiqyXlpLdS2Uc6PcQKjSRBgXRZM7Cy9QG2nBPXBx0qKLU9Nn08atDdwyWLJ5gnWRTEU/vBwduPfOKAL1FV7i7tbRUe6mSFZHSNS7BQzyHaqjPUsTgDqTwKWe5trWPzrmVIY9yrudgo3OwVRk8ZLEADuTigCeiiigAooooAKKKKACiiigAooooAKKKKACsO1/4+Z/8Aro/8zW5WHa/8fM//AF0f+ZoA2x0paQdKWgAooooA/9P9/KKKKAGSfdrItP8AkIt/1zP8xWvJ92si0/5CLf8AXM/zFAG1RRRQAUUUUAFFFcl458JW/jrwxdeFby5e2tL94BcGMAmSCOZJJoTn+GaNWib/AGWNNAz4I8SeN/E+teI9Olvteu59Us572W9wEt7Hw7JDrFvbQzJLAiM1vJaJcbxM8okQKd0ZcB/0V0vVdM1zTbXWdFvIdQ0+9jWa3uLeRZYZonGVeN0JVlYHIIJBHSuA1/4Q+BNZ0PTNGstJtdIbQJEm0mezt4opNOlRxIDbFVHlhiMSKuN6lgeua6/wz4a0nwjpC6FocbRWUc1xMiM5fabmZ53VS2SFDSEKvRVwo4ArSpNNaGcItPU+cv2kX+Kuj+AvFN9onirTIbPVYRpmn6ZJpDyXM11qO20hgW5F6oLSSycMIflByVIU5l+AP/C1de8G6K/iHxPpy22kpJpOp6VBpEtvc291Yg20sK3X21sbHUMknlfOm1gAGBHqEnw3vtb+IkXjjxjq/wDaVpojs2haZFF5NtZvJF5clzNlnM9zguqOdqxoxCoGLMVk+GcmnfEhPiH4Q1RtIOpkLr1iU8611NUi8uKbZuXybqPaiiZfvRjY6vhClc65eUXI+a5+ZdlJrP8Awkp8Wa3ca1cW+rR+I9PkJn1+zMlpocGoXEEK6o+qypOGeD5lEC43uRgivc7XQtP074c+PPB9jPqUfhi2n8LaMbKTUrm6SDR9VhslvI4hdPMqbIrqXaUVeFUHgV6doX7JGh6f4i0bVb0aabe1Ouyai0FrJHe6g+s/aoij3AlGyJIbnBATcXUEMB07XRfgZ4jPh3xXpfiLxNDb3niq6spJJNKsI1it7axtoLWOGOPUGvQzFYQxd92CeBxzvOtF7P8Aq5lGk+x8B+M/iBqelS+HddvtY8271iDRZ2lN9Osy2+nXF7f6bdXSjQr+NVhUyMxScmRVy0ZAOO98eeMdX0L4R/CpdM8SeHLG0n1y+McWo3M8qz6jb3kmLqRp7XTyU0+YyzyRNBHmdIY1DEqrfQV/+x/ZjTf+Ef0HxJPBpdvp8Wn2321WvLhI49P1CxUNIXjBCi9BUAABY9gwCCPQtN+BWuL4f0nSL3xhcabNaX2tahdTaRa28M00ms38t80cU9ylxNbxoZdh8pldwAS4xim60NBKnLU+Bdbj8G3HiHWdSn13wbfeIG8caV5Ju7dE8WXCHUbH97CVmTYrqSxVbfATeMAcj9ia+MpP2avie2g6j4cHxF017bUtWg1l5ZfD0ktyLi3uIblB5zallgXgTdkEsC3OTkfY9us6W8SXLrLMqqHdV2KzAckLlsAnoMnHqawrzTtZmtKLV7omooornNgooooAKKKKACiiigDhf+Fj+Ex4YufFct00VrZMYp4nRhcx3AO37O0P3/OLEKqAZYkbcggmTwZ/wll7Hda94r/0NtRKG300bT9igTO0SOPvTPnMmCVBAVeFLNZufAvhW78TxeMJ7BW1SELiTJCs6ArHIyZ2NIisyo5G5VYgHGMdbXrYnEYaNNww8XeW7la6/ux+e8tG1ZWSvzebQoV3NSryVo7JX1838to6pb3elisO1/4+Z/8Aro/8zW5WHa/8fM//AF0f+ZryT0jbHSlpB0paACiiigD/1P38ooooAZJ92si0/wCQi3/XM/zFa8n3ayLT/kIt/wBcz/MUAbVFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWHa/8fM//XR/5mtysO1/4+Z/+uj/AMzQBtjpS0g6UtABRRRQB//V/fyiiigBkn3ayLT/AJCLf9cz/MVryfdrItP+Qi3/AFzP8xQBtUUUUAFFFFABRRXJeOfE1x4Q8MXWu2envq13G8EFvaRkqZp7qZIIULBX2KZJF3PtO1ctg4ppXBs8t1v9ojwhpuqRWWm2t1qdrG8v2q6WGSCJIIbiKzlnt3nRI7uOK4mRJTA7bMgnOV3e/wBfBnij4M/EPRbHQPEmotbXlnoc80g060eSePSlvNTS+Z0RokOoRRMkWUc2xSOL5WPzBvsXwLf+KtS8LWdx42so7HXEM0N0kIKwu8ErxedEpeQrHMFEsas7MFYBiSDWlSKSujOEnezPGvip+0ZpHwy8dxeAruPS4bmTTodR+0avrdro8BSeaaEIhnDNIymEltqnAI9aj+Hf7QGneNPFkOh3viPwMFvFdba00fxQmrajNKBuAEX2e3H3QxIUse+eteN/FfxTd2XxD8V+NLHXD4Z0+LUvDPhCXVfs9vcGFYhd314Yluopoz/x+xIW2H5lI7Gui+GnjdLj42aB4U0P4mv4/wBN1DSNWurqKWx063NtNaSWawMr2lpbv8wmkBBYg46Vt7Ncuxnzu+56lb/tE+CdT8d3Oh6VrekJ4c0WORNS1a6v4oY2vsjZa2m5gJSg3Gd87EO1AS+4JasP2k/hdqnwn1f4v2Goq+laG81tdQ+ZE0yXsTBBafunkjaWR2QR7HZX3qysVYGvlHTZ/h6PEni1NQ8d6V4JuNM17UrKKwt/D2kt5VvbzFIiZHs2diy8klia2tIGn+IPgz8VfENlrdjqGo3Oqpo0OuS6ObpJbe1EBtpP7NsYtstxCbiQQssO4vsDZVQAOjEFUZ6JP+1hsl0XS7GLw1LfXOnNcX9xqHiH+ytPjvYJRBcW1pPJaTC6EUu5TIh2/KR1BA+kvhf42HxJ+HXhzx+LMaePEFjBe/ZxL5wi85A2wSbU34z97aM+lfmx4d8T6b4M8Y6L4XfxR4b8JHQPDYsRH4p0GS1RIvtCvCkVk2opPEzKfM3TytK4JLKM5r7c/ZQ1bTdW/Z18Avpl1Fdi00q2tpjEQQk8KBZIyB0ZW4I6ilWppRukFKbbs2fQ1FFFcp0BRRRQAUUUUAFFFFABRRRQAViad4i0nVtT1LSNOm8+fSWjS5KqdiSSAsI9+NpcAAsoOVBXOMivM7i0+K1v5ngmznE1rcEeT4gcoZ7e053pJF/HdLwsbhdjA73GVKt6Z4c8O6T4V0e30PRYfJtbcHGSWd3Y5d5HOS7uxLMxJLEkmvWxOBo0abcpqUn8PK9Ld5duyjo73btZc3m0MXUqzSUHFLe669l37uWq6K93bbrDtf8Aj5n/AOuj/wAzW5WHa/8AHzP/ANdH/ma8k9I2x0paQdKWgAooooA//9b9/KKKKAGSfdrItP8AkIt/1zP8xWvJ92si0/5CLf8AXM/zFAG1RRRQAUUUUAFFFFABRRRQBBJa20pUyxI5VxINyg4ccBh7gdD1pzQQPMlw0atLGGVXIG5Q2NwB6gHAz64HpUtFAEMNvBbhxbxrEJGZ22gLlmOSxx1JPU96WK3ggMhhjWMytvfaANzEAbjjqcAc+1S0UAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWHa/8fM//XR/5mtysO1/4+Z/+uj/AMzQBtjpS0g6UtABRRRQB//X/fyiiigBkn3ayLT/AJCLf9cz/MVryfdrItP+Qi3/AFzP8xQBtUUUUAFFFFABRRRQAUV+bfiTxv4n1rxHp0t9r13PqlnPey3uAlvY+HZIdYt7aGZJYERmt5LRLjeJnlEiBTujLgP+iul6rpmuaba6zot5DqGn3sazW9xbyLLDNE4yrxuhKsrA5BBII6VpOnykRncuLLG7OiOGaM4YA5KkgHB9OCDT6+P/AIhWtyvxQ8T6dLpGh6GNa8N3N5Lq97PdX9peWOmzWiTf2npkf2NC8aTMsUouHZUBBO07Bw37P+jeI9M8V+H7y70rwn4Y1PX9CfVxa2WgXVndSWMjhTEty+pS7JI2a3edGgIXeqgk5Ir2Wl7i9prax91tqmmoszvdwqtvIsMhMigJK+3ajc8Md64B5O4eoqa1u7W+t0urKZLiCTlZI2Do2DjgjIPNfjIni/4ia3piwHxXoGo6TbeNYLnVjpl7FC9xqMd20qXLXF1E4iie4BWHzV2rFZQlUZZQ9eu/Dzxd4ksf2YfiTdW/iy10KLSrrU4xdXWpW99Ha202rXizCGOzgSSKZ4wUt2O5ZXKtEirha0lhbLczjiLvY/UC2ube8gjurSVJ4ZVDI6MGVlPIII4IPqKmr8ftPvfCvia88GXPjrXvh5Dbp4ZZLeDXoop9HsFS6CxWFg4uIRI1vFtV5fMk3Hdg7cAfoV+y+c/s7fDg5BzoVjyv3T+6Xp7elRUo8quXTq8zse70UUVgahRRRQAUUUUAFFFFABRRRQAUUUUAFYdr/wAfM/8A10f+ZrcrDtf+Pmf/AK6P/M0AbY6UtIOlLQAUUUUAf//Q/fyiiigBkn3ayLT/AJCLf9cz/MVryfdrItP+Qi3/AFzP8xQBtUUUUAFFFFABXJeOfCVv468MXXhW8uXtrS/eAXBjAJkgjmSSaE5/hmjVom/2WNdbRTTtqDR5jr/wh8CazoemaNZaTa6Q2gSJNpM9nbxRSadKjiQG2KqPLDEYkVcb1LA9c11/hnw1pPhHSF0LQ42iso5riZEZy+03MzzuqlskKGkIVeirhRwBW/RQ5O1hcq3PmP4nfs/658TPEOreIL7xUiR3Fp/ZdpptxYC400abL5UtzDdRpLDPNJNcRK/mR3EW1URQCN+/E8D/ALOmt+DvFumeKbZfB9lcWJmL3OmaBe2l/KJYXh2tcPqsvmL82dkyyLkAgBwrD63orRVpWsT7NXufKGrfs4+JL/QbHS/+E4a4kstQs7yO3m0uxj0m3S2ZmKwWFvHECWzjMssnHf10fCH7Pes+EvCGs+D7TxZAsOr3Ml2J4dEsklilnvXvZDtl86J9rSMsIdGEQxgHaK+nqKPbStYPZrc+V0+AnxF0jxi/irw38RUuf9BFio17STqs+wuJXJlju7VBlwSqxxIiqcBe59d+EHgTU/hl8OtE8Bapq0ettocC2sVzHamzDQxjbGGjMs3zAcE7sHrgV6XRUyqNqzBQSd0FFFFQWFFFFABRRRQAUUUUAFFFFABRRRQAVh2v/HzP/wBdH/ma3Kw7X/j5n/66P/M0AbY6UtIOlLQAUUUUAf/R/fyiiigBkn3ayLT/AJCLf9cz/MVryfdrItP+Qi3/AFzP8xQBtUUUUAFFFFABRXgGt/tEeENN1SKy021utTtY3l+1XSwyQRJBDcRWcs9u86JHdxxXEyJKYHbZkE5yu73+qcWtxKSewUV8zax+0P8AYvilr3w+0fRE1W20S1iWS9/tCytI4tReN55IZxczxyiKOHymaSGKYqWYMoKYPLfDb9rvwn8SvG0fhLSJdMInkEmf7Ut/Ngs49KhvZ3KqziaSO4laArH8oWOVy48sg37GVrke1jsfYVFfAWsftr6gbPxJr/hDwVea14f03U7Sz0+/VCkV1C0kKXEjh2RkLmRvIwpBGxm4YgfW3w38f3nxB0+71G58N3/h1LaURKt/5QeU7dxKiN2OBkcnGc8ZwcKdGUVdjjUT0R6PRRRWZYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFYdr/AMfM/wD10f8Ama3Kw7X/AI+Z/wDro/8AM0AbY6UtIOlLQAUUUUAf/9L9/KKKKAGSfdrItP8AkIt/1zP8xWvJ92si0/5CLf8AXM/zFAG1RRRQAVyXjnxNceEPDF1rtnp76tdxvBBb2kZKmae6mSCFCwV9imSRdz7TtXLYOK62imgZ8GeKPgz8Q9FsdA8Sai1teWehzzSDTrR5J49KW81NL5nRGiQ6hFEyRZRzbFI4vlY/MG+xfAt/4q1LwtZ3HjayjsdcQzQ3SQgrC7wSvF50Sl5CscwUSxqzswVgGJINddRVyqNqzIjCzuj87f2idJGmfHm11q912RPt/hLWxb28OkQ3ciYlsYxAZI4XlVJf3jtO5Hkqr4dULVzvwzsfFWnfE34H6R4qug5ktbi6itJNcj1GUWzaNcospsxY2zxRknaHMjqD8nJ5r9MnRJEZJFDKwIIIyCD1BquljZRzLcR28aypGIlcIAwjHIQHGQvt0rRV/dtYh0db3Px2+Kng/wABeKfiR4+t7iXR7DGtyrOuo6jo8F20sQifcjT+Hry4SI4ACG5YEZBG0kH7K/YyWwHhfxfDpU0BtrDWhZmOyGmNZNKtnbztPDJp2maYHLrOkb+ZGxBiAUgZr7Dht7e33+REsfmsXfaoXc56scdSe5oit7eB5ZIYljadt8hVQC77Qu5iOp2qBk9gB2onXvHlsEaNne5NRRRXObBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVh2v/HzP/wBdH/ma3Kw7X/j5n/66P/M0AbY6UtIOlLQAUUUUAf/T/fyiiigBrjIrGd2tJzOqb/lIxnHcGtuoXhV+tAGE2u3CnAs8/wDA/wD7Gmf2/c/8+X/kT/7Gtg2aHtR9jj9KAMf+37n/AJ8v/In/ANjR/b9z/wA+X/kT/wCxrY+xx+lH2OP0oAx/7fuf+fL/AMif/Y0f2/c/8+X/AJE/+xrY+xx+lH2OP0oAx/7fuf8Any/8if8A2NH9v3P/AD5f+RP/ALGtj7HH6UfY4/SgDH/t+5/58v8AyJ/9jR/b9z/z5f8AkT/7Gtj7HH6UfY4/SgDH/t+5/wCfL/yJ/wDY0f2/c/8APl/5E/8Asa2PscfpR9jj9KAMf+37n/ny/wDIn/2NH9v3P/Pl/wCRP/sa2PscfpR9jj9KAMf+37n/AJ8v/In/ANjR/b9z/wA+X/kT/wCxrY+xx+lH2OP0oAx/7fuf+fL/AMif/Y0f2/c/8+X/AJE/+xrY+xx+lH2OP0oAx/7fuf8Any/8if8A2NH9v3P/AD5f+RP/ALGtj7HH6UfY4/SgDH/t+5/58v8AyJ/9jR/b9z/z5f8AkT/7Gtj7HH6UfY4/SgDH/t+5/wCfL/yJ/wDY0f2/c/8APl/5E/8Asa2PscfpR9jj9KAMf+37n/ny/wDIn/2NH9v3P/Pl/wCRP/sa2PscfpR9jj9KAMyPW53ODaY/4H/9jVu0Ql3kIxvYtj0yc1ZW0QHpVlIwtADx0paKKACiiigD/9T9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//V/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==