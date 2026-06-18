<?php

namespace App\Http\Controllers;

class SuperAdminController extends Controller
{
    public function dashboard()
    {
        $kpis = [
            ['label' => 'Total Redemptions', 'value' => '128,420', 'delta' => '+12.4%', 'trend' => 'up',   'icon' => 'confirmation_number', 'spark' => [4,8,6,12,10,16,14,22,20,28,26,34]],
            ['label' => 'Active Users',      'value' => '42,189',  'delta' => '+5.1%',  'trend' => 'up',   'icon' => 'group',               'spark' => [10,14,12,16,15,20,19,24,22,28,26,30]],
            ['label' => 'Revenue (MTD)',     'value' => '$284,920','delta' => '+8.7%',  'trend' => 'up',   'icon' => 'payments',            'spark' => [5,7,6,9,11,10,14,13,17,16,21,25]],
            ['label' => 'Failed Tokens',     'value' => '142',     'delta' => '-3.2%',  'trend' => 'down', 'icon' => 'report',              'spark' => [22,18,20,15,17,12,14,10,11,8,9,6]],
        ];
        $revenueSeries = ['labels' => ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], 'current' => [12,18,14,24,22,30,36], 'previous' => [10,12,11,18,16,22,24]];
        $sourceBreakdown = [
            ['label' => 'Vinyl insert', 'value' => 48, 'color' => '#53e076'],
            ['label' => 'Digital pass', 'value' => 26, 'color' => '#72fe8f'],
            ['label' => 'NFC tag',      'value' => 14, 'color' => '#cfc4c4'],
            ['label' => 'Merch QR',     'value' => 12, 'color' => '#ffb3b3'],
        ];
        $topArtists = [
            ['name' => 'Cyber Echoes',  'plays' => '482,901', 'change' => '+18%', 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuChqVpeUCEFs5U7WuEaY64Tg7gQTzHxHYGBIR_YhsRc_ZhKVx5O5_yip_OweNC0jPzTpJ6X9fKbk0bf4srrI6ij6PcWFdkZy4zHo_SlNLZMXLkLBsD6RRe9eqQUDdIFl1PSbssKB0lq5ndbplCdRmGLruSZgczH6dhDdDdcdxqGLqW7XnsPzcSLbodcWzjANZyDAx1u5rYqkaplsLAPwNmxyrI5Z_tbCq4klIwJ5taoKzbT09KaWge-Mbybr6yt-0S3J9pe1VlxwKs'],
            ['name' => 'Digital Drift', 'plays' => '341,012', 'change' => '+9%',  'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCal__rmJC6rH62tAtPXBhHWj0BqHK5N77copHmQO2GPo3Z9ZsucqeKO3t6QjkMzeRA2lm6x9wrdHXN643adSUSRiHA22mxrlAqQ3IOJn-gDzQGzXbQWQ0QssD255XkJ7M6ImwW-1dnZdBHatsHn5n5No4O6f2IvJULdBp8uS6x3sDESSGijebKVKueF100dM5i09YxyNOAjFWmyXYGe4XGaJ7UdvNY1E0A_h0UPKHnOeNLWjP_lcvU9TsrAFyQ8rIT4SJfKyjFnac'],
            ['name' => 'Flow State',    'plays' => '298,556', 'change' => '+6%',  'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt_-sTtFeR6r6xH5xRemZpReuuMF39oyTtWil36RNL_NZRQqUvglDVqGuapXyb-DY5aUMcrjlC4ex3jEeQ0kxmkzaWUBpZ7ZByDODh9-4WEgKd29po8VJeQPciQZ8xMyCHrvoUz1_3wq4ozBvxSo_Hr9UhS5KG7_T8PCRIPLtpXDU05kHRYeYuP2tD3xYzLD8trQz2obauulg1zELcYeTHvqxCWTkToOHX7pexR5I8DiPLzB3jNQ_UPHCyZ0UlLyhHBvBfsQY0oIQ'],
            ['name' => 'Bass Theory',   'plays' => '212,488', 'change' => '+4%',  'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAPhAU3ufy4jmWhXubAFevI9zzzJNKCd7vfd337ycgUkpbfBRQPeIEHsM2v_bJmXJ9xKPRTOt3q3BP7DWlZpgUV4K-hcm0cGW8Nf7iL7QEdGp1nnbda3pmKtseCvJ2553DZpWkTvFFbacAsu1QrJNjv4mLDlgZcuR1ygt54OQ6tAd_nvssG7JqUAGHSh15UWclCvsvi5fQV2Vn2G8oWtb1WRPFzLuSITC7K3DCZpk9nkezWvQXzDnkpB4SZlgJIgtXNmrJ9Yd-qFU'],
        ];
        $recentRedemptions = [
            ['id' => '#TK-88219', 'user' => 'amelia.k@example.com',  'asset' => 'Synthetic Horizons', 'status' => 'Success', 'value' => '$9.99', 'time' => 'Just now'],
            ['id' => '#TK-88218', 'user' => 'rae.t@example.com',     'asset' => 'Synthetic Horizons', 'status' => 'Success', 'value' => '$9.99', 'time' => '2 min ago'],
            ['id' => '#TK-88217', 'user' => 'jules.x@example.com',   'asset' => 'Liquid Rhythms',     'status' => 'Invalid', 'value' => '—',     'time' => '6 min ago'],
            ['id' => '#TK-88216', 'user' => 'morgan.b@example.com',  'asset' => 'After Hours',        'status' => 'Pending', 'value' => '$4.99', 'time' => '12 min ago'],
            ['id' => '#TK-88215', 'user' => 'leo.r@example.com',     'asset' => 'Subterranean',       'status' => 'Success', 'value' => '$9.99', 'time' => '21 min ago'],
            ['id' => '#TK-88214', 'user' => 'maya.f@example.com',    'asset' => 'Midnight Mix',       'status' => 'Refund',  'value' => '-$4.99','time' => '34 min ago'],
        ];
        $users = [
            ['name' => 'Amelia Kato',  'email' => 'amelia.k@example.com', 'tier' => 'Premium · II', 'redemptions' => 24, 'status' => 'Active',    'joined' => 'Mar 2024'],
            ['name' => 'Rae Thompson', 'email' => 'rae.t@example.com',    'tier' => 'Premium · I',  'redemptions' => 18, 'status' => 'Active',    'joined' => 'Apr 2024'],
            ['name' => 'Jules Xu',     'email' => 'jules.x@example.com',  'tier' => 'Free',         'redemptions' => 3,  'status' => 'Suspended', 'joined' => 'May 2024'],
            ['name' => 'Morgan Brett', 'email' => 'morgan.b@example.com', 'tier' => 'Premium · I',  'redemptions' => 12, 'status' => 'Active',    'joined' => 'Jun 2024'],
            ['name' => 'Leo Reyes',    'email' => 'leo.r@example.com',    'tier' => 'Premium · II', 'redemptions' => 31, 'status' => 'Active',    'joined' => 'Jan 2024'],
        ];
        $systemHealth = [
            ['service' => 'API Gateway',     'status' => 'Operational', 'latency' => '42 ms',  'uptime' => '99.99%'],
            ['service' => 'Auth Service',    'status' => 'Operational', 'latency' => '38 ms',  'uptime' => '99.97%'],
            ['service' => 'CDN (Audio)',     'status' => 'Degraded',    'latency' => '128 ms', 'uptime' => '99.42%'],
            ['service' => 'Payment Gateway', 'status' => 'Operational', 'latency' => '210 ms', 'uptime' => '99.91%'],
            ['service' => 'Background Jobs', 'status' => 'Operational', 'latency' => '—',      'uptime' => '99.99%'],
        ];
        return view('super-admin.dashboard', compact('kpis','revenueSeries','sourceBreakdown','topArtists','recentRedemptions','users','systemHealth'));
    }

    public function redemptions()
    {
        $stats = [
            ['label' => 'Today',        'value' => '1,284',  'delta' => '+8.2%',  'icon' => 'today'],
            ['label' => 'This Week',    'value' => '9,612',  'delta' => '+12.4%', 'icon' => 'date_range'],
            ['label' => 'This Month',   'value' => '38,420', 'delta' => '+5.1%',  'icon' => 'calendar_month'],
            ['label' => 'Failure Rate', 'value' => '0.42%',  'delta' => '-0.1%',  'icon' => 'percent'],
        ];
        $rows = [
            ['id' => '#TK-88219', 'user' => 'amelia.k@example.com',  'asset' => 'Synthetic Horizons', 'source' => 'Vinyl insert', 'status' => 'Success', 'value' => '$9.99',  'time' => 'Just now',     'ip' => '24.118.55.10'],
            ['id' => '#TK-88218', 'user' => 'rae.t@example.com',     'asset' => 'Synthetic Horizons', 'source' => 'Vinyl insert', 'status' => 'Success', 'value' => '$9.99',  'time' => '2 min ago',    'ip' => '188.42.12.7'],
            ['id' => '#TK-88217', 'user' => 'jules.x@example.com',   'asset' => 'Liquid Rhythms',     'source' => 'Digital pass', 'status' => 'Invalid', 'value' => '—',      'time' => '6 min ago',    'ip' => '74.92.221.4'],
            ['id' => '#TK-88216', 'user' => 'morgan.b@example.com',  'asset' => 'After Hours',        'source' => 'NFC tag',      'status' => 'Pending', 'value' => '$4.99',  'time' => '12 min ago',   'ip' => '99.65.18.222'],
            ['id' => '#TK-88215', 'user' => 'leo.r@example.com',     'asset' => 'Subterranean',       'source' => 'Merch QR',     'status' => 'Success', 'value' => '$9.99',  'time' => '21 min ago',   'ip' => '212.55.40.91'],
            ['id' => '#TK-88214', 'user' => 'maya.f@example.com',    'asset' => 'Midnight Mix',       'source' => 'Digital pass', 'status' => 'Refund',  'value' => '-$4.99', 'time' => '34 min ago',   'ip' => '154.21.6.33'],
            ['id' => '#TK-88213', 'user' => 'devon.r@example.com',   'asset' => 'Synthetic Horizons', 'source' => 'Vinyl insert', 'status' => 'Success', 'value' => '$9.99',  'time' => '1 hr ago',     'ip' => '67.10.78.5'],
            ['id' => '#TK-88212', 'user' => 'sage.h@example.com',    'asset' => 'Liquid Rhythms',     'source' => 'Digital pass', 'status' => 'Success', 'value' => '$9.99',  'time' => '1 hr ago',     'ip' => '203.0.113.4'],
            ['id' => '#TK-88211', 'user' => 'noor.p@example.com',    'asset' => 'After Hours',        'source' => 'NFC tag',      'status' => 'Success', 'value' => '$4.99',  'time' => '2 hr ago',     'ip' => '40.121.9.12'],
            ['id' => '#TK-88210', 'user' => 'theo.b@example.com',    'asset' => 'Bass Theory',        'source' => 'Vinyl insert', 'status' => 'Invalid', 'value' => '—',      'time' => '3 hr ago',     'ip' => '149.40.62.18'],
        ];
        return view('super-admin.redemptions', compact('stats','rows'));
    }

    public function users()
    {
        $stats = [
            ['label' => 'Total Users', 'value' => '42,189', 'delta' => '+5.1%',  'icon' => 'group',           'trend' => 'up'],
            ['label' => 'Premium',     'value' => '18,902', 'delta' => '+9.4%',  'icon' => 'workspace_premium','trend' => 'up'],
            ['label' => 'Suspended',   'value' => '124',    'delta' => '-2.0%',  'icon' => 'block',           'trend' => 'down'],
            ['label' => 'New (7d)',    'value' => '2,418',  'delta' => '+11.2%', 'icon' => 'person_add',      'trend' => 'up'],
        ];
        $rows = [
            ['name' => 'Amelia Kato',  'email' => 'amelia.k@example.com', 'tier' => 'Premium · II', 'redemptions' => 24, 'status' => 'Active',    'joined' => 'Mar 2024', 'country' => 'JP'],
            ['name' => 'Rae Thompson', 'email' => 'rae.t@example.com',    'tier' => 'Premium · I',  'redemptions' => 18, 'status' => 'Active',    'joined' => 'Apr 2024', 'country' => 'US'],
            ['name' => 'Jules Xu',     'email' => 'jules.x@example.com',  'tier' => 'Free',         'redemptions' => 3,  'status' => 'Suspended', 'joined' => 'May 2024', 'country' => 'CN'],
            ['name' => 'Morgan Brett', 'email' => 'morgan.b@example.com', 'tier' => 'Premium · I',  'redemptions' => 12, 'status' => 'Active',    'joined' => 'Jun 2024', 'country' => 'GB'],
            ['name' => 'Leo Reyes',    'email' => 'leo.r@example.com',    'tier' => 'Premium · II', 'redemptions' => 31, 'status' => 'Active',    'joined' => 'Jan 2024', 'country' => 'PH'],
            ['name' => 'Devon Riley',  'email' => 'devon.r@example.com',  'tier' => 'Free',         'redemptions' => 6,  'status' => 'Active',    'joined' => 'Feb 2024', 'country' => 'CA'],
            ['name' => 'Sage Han',     'email' => 'sage.h@example.com',   'tier' => 'Premium · I',  'redemptions' => 14, 'status' => 'Active',    'joined' => 'Feb 2024', 'country' => 'KR'],
            ['name' => 'Noor Patel',   'email' => 'noor.p@example.com',   'tier' => 'Premium · II', 'redemptions' => 22, 'status' => 'Active',    'joined' => 'Jan 2024', 'country' => 'IN'],
            ['name' => 'Theo Brennan', 'email' => 'theo.b@example.com',   'tier' => 'Free',         'redemptions' => 2,  'status' => 'Inactive',  'joined' => 'Dec 2023', 'country' => 'AU'],
        ];
        return view('super-admin.users', compact('stats','rows'));
    }

    public function assets()
    {
        $stats = [
            ['label' => 'Total Assets', 'value' => '1,402', 'delta' => '+6 this week', 'icon' => 'album'],
            ['label' => 'Active Drops', 'value' => '24',    'delta' => 'live',         'icon' => 'campaign'],
            ['label' => 'Scheduled',    'value' => '8',     'delta' => 'queued',       'icon' => 'schedule'],
            ['label' => 'Archived',     'value' => '186',   'delta' => 'hidden',       'icon' => 'archive'],
        ];
        $assets = [
            ['title' => 'Synthetic Horizons', 'artist' => 'Cyber Echoes',  'redemptions' => '12,402', 'limit' => 15000, 'status' => 'Live',      'price' => '$9.99', 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuChqVpeUCEFs5U7WuEaY64Tg7gQTzHxHYGBIR_YhsRc_ZhKVx5O5_yip_OweNC0jPzTpJ6X9fKbk0bf4srrI6ij6PcWFdkZy4zHo_SlNLZMXLkLBsD6RRe9eqQUDdIFl1PSbssKB0lq5ndbplCdRmGLruSZgczH6dhDdDdcdxqGLqW7XnsPzcSLbodcWzjANZyDAx1u5rYqkaplsLAPwNmxyrI5Z_tbCq4klIwJ5taoKzbT09KaWge-Mbybr6yt-0S3J9pe1VlxwKs'],
            ['title' => 'Liquid Rhythms',     'artist' => 'Flow State',    'redemptions' => '8,116',  'limit' => 10000, 'status' => 'Live',      'price' => '$9.99', 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt_-sTtFeR6r6xH5xRemZpReuuMF39oyTtWil36RNL_NZRQqUvglDVqGuapXyb-DY5aUMcrjlC4ex3jEeQ0kxmkzaWUBpZ7ZByDODh9-4WEgKd29po8VJeQPciQZ8xMyCHrvoUz1_3wq4ozBvxSo_Hr9UhS5KG7_T8PCRIPLtpXDU05kHRYeYuP2tD3xYzLD8trQz2obauulg1zELcYeTHvqxCWTkToOHX7pexR5I8DiPLzB3jNQ_UPHCyZ0UlLyhHBvBfsQY0oIQ'],
            ['title' => 'Subterranean',       'artist' => 'Bass Theory',   'redemptions' => '4,902',  'limit' => 6000,  'status' => 'Live',      'price' => '$9.99', 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAPhAU3ufy4jmWhXubAFevI9zzzJNKCd7vfd337ycgUkpbfBRQPeIEHsM2v_bJmXJ9xKPRTOt3q3BP7DWlZpgUV4K-hcm0cGW8Nf7iL7QEdGp1nnbda3pmKtseCvJ2553DZpWkTvFFbacAsu1QrJNjv4mLDlgZcuR1ygt54OQ6tAd_nvssG7JqUAGHSh15UWclCvsvi5fQV2Vn2G8oWtb1WRPFzLuSITC7K3DCZpk9nkezWvQXzDnkpB4SZlgJIgtXNmrJ9Yd-qFU'],
            ['title' => 'After Hours',        'artist' => 'The Collective','redemptions' => '0',      'limit' => 5000,  'status' => 'Scheduled', 'price' => '$4.99', 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuA73c2TfvADgzSKAWq1xfkw_EZMsD1o3TDwuTkCA2Pb3hE5OG4nt_w0bo-i6ExYBbl8eut7d5fqGv6hkn_Xl_pT2aiJSSM-LPH9BvWojFXUMPv7tyAGitvvVnmXNT72yVq5UjCyWCK_fkDlsX89Cc1Ds8K-p3FuGhPMEwq2-iNEhIUskUhqnbxwiBjjgHsb544Htkuk_uRs2319lXXwSRNFRowUCPnq7bo6rohbleGEDD1BlmxvbHjcxMzOtnXUWfPAGBvIjCSTpHc'],
            ['title' => 'Midnight Mix',       'artist' => 'Main Stage',    'redemptions' => '6,401',  'limit' => 8000,  'status' => 'Live',      'price' => '$4.99', 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg-8NCXLlzR4irK3de5--mQrP8oW5zY3cn3bYqGXm5sHHWH7BVhlfrILYaThB-Wt_ouP8pznfSK8qhWZFO_-1m4-9eCBuXcRMMZ1NYXs9du0SfE10Jvr48k9bilSeVcjiw7u4P5u_sq-mbHVuWT4EMgu2dzbupzYkf-7MUNfbU_ww8aR4cOUG01MXkZyR5l8EjvGp_mIiHxEwKWzyyRWNDO1L3zTzW5rH7m6gEjhySg2FKC822C8JfdHj2eAdeqxppCHU8PSAJ-q8'],
            ['title' => 'Cyber Synth',        'artist' => 'Digital Drift', 'redemptions' => '9,801',  'limit' => 12000, 'status' => 'Live',      'price' => '$9.99', 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCal__rmJC6rH62tAtPXBhHWj0BqHK5N77copHmQO2GPo3Z9ZsucqeKO3t6QjkMzeRA2lm6x9wrdHXN643adSUSRiHA22mxrlAqQ3IOJn-gDzQGzXbQWQ0QssD255XkJ7M6ImwW-1dnZdBHatsHn5n5No4O6f2IvJULdBp8uS6x3sDESSGijebKVKueF100dM5i09YxyNOAjFWmyXYGe4XGaJ7UdvNY1E0A_h0UPKHnOeNLWjP_lcvU9TsrAFyQ8rIT4SJfKyjFnac'],
        ];
        return view('super-admin.assets', compact('stats','assets'));
    }

    public function revenue()
    {
        $kpis = [
            ['label' => 'Revenue (MTD)', 'value' => '$284,920', 'delta' => '+8.7%',  'trend' => 'up',   'icon' => 'payments'],
            ['label' => 'ARR Forecast',  'value' => '$3.42M',   'delta' => '+11.4%', 'trend' => 'up',   'icon' => 'trending_up'],
            ['label' => 'Avg. Basket',   'value' => '$8.42',    'delta' => '+0.4%',  'trend' => 'up',   'icon' => 'shopping_bag'],
            ['label' => 'Refund Rate',   'value' => '0.62%',    'delta' => '-0.1%',  'trend' => 'down', 'icon' => 'autorenew'],
        ];
        $bars = ['labels' => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 'values' => [120,138,142,168,182,210,232,248,264,278,290,284]];
        $byRegion = [
            ['region' => 'North America', 'value' => '$112,402', 'pct' => 42],
            ['region' => 'Europe',        'value' => '$84,901',  'pct' => 30],
            ['region' => 'Asia Pacific',  'value' => '$58,402',  'pct' => 20],
            ['region' => 'Latin America', 'value' => '$22,400',  'pct' => 8],
        ];
        $topEarners = [
            ['title' => 'Synthetic Horizons', 'artist' => 'Cyber Echoes',  'revenue' => '$124,012', 'pct' => 92, 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuChqVpeUCEFs5U7WuEaY64Tg7gQTzHxHYGBIR_YhsRc_ZhKVx5O5_yip_OweNC0jPzTpJ6X9fKbk0bf4srrI6ij6PcWFdkZy4zHo_SlNLZMXLkLBsD6RRe9eqQUDdIFl1PSbssKB0lq5ndbplCdRmGLruSZgczH6dhDdDdcdxqGLqW7XnsPzcSLbodcWzjANZyDAx1u5rYqkaplsLAPwNmxyrI5Z_tbCq4klIwJ5taoKzbT09KaWge-Mbybr6yt-0S3J9pe1VlxwKs'],
            ['title' => 'Cyber Synth',        'artist' => 'Digital Drift', 'revenue' => '$96,802',  'pct' => 78, 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCal__rmJC6rH62tAtPXBhHWj0BqHK5N77copHmQO2GPo3Z9ZsucqeKO3t6QjkMzeRA2lm6x9wrdHXN643adSUSRiHA22mxrlAqQ3IOJn-gDzQGzXbQWQ0QssD255XkJ7M6ImwW-1dnZdBHatsHn5n5No4O6f2IvJULdBp8uS6x3sDESSGijebKVKueF100dM5i09YxyNOAjFWmyXYGe4XGaJ7UdvNY1E0A_h0UPKHnOeNLWjP_lcvU9TsrAFyQ8rIT4SJfKyjFnac'],
            ['title' => 'Liquid Rhythms',     'artist' => 'Flow State',    'revenue' => '$78,401',  'pct' => 64, 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt_-sTtFeR6r6xH5xRemZpReuuMF39oyTtWil36RNL_NZRQqUvglDVqGuapXyb-DY5aUMcrjlC4ex3jEeQ0kxmkzaWUBpZ7ZByDODh9-4WEgKd29po8VJeQPciQZ8xMyCHrvoUz1_3wq4ozBvxSo_Hr9UhS5KG7_T8PCRIPLtpXDU05kHRYeYuP2tD3xYzLD8trQz2obauulg1zELcYeTHvqxCWTkToOHX7pexR5I8DiPLzB3jNQ_UPHCyZ0UlLyhHBvBfsQY0oIQ'],
            ['title' => 'Subterranean',       'artist' => 'Bass Theory',   'revenue' => '$48,901',  'pct' => 42, 'img' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAPhAU3ufy4jmWhXubAFevI9zzzJNKCd7vfd337ycgUkpbfBRQPeIEHsM2v_bJmXJ9xKPRTOt3q3BP7DWlZpgUV4K-hcm0cGW8Nf7iL7QEdGp1nnbda3pmKtseCvJ2553DZpWkTvFFbacAsu1QrJNjv4mLDlgZcuR1ygt54OQ6tAd_nvssG7JqUAGHSh15UWclCvsvi5fQV2Vn2G8oWtb1WRPFzLuSITC7K3DCZpk9nkezWvQXzDnkpB4SZlgJIgtXNmrJ9Yd-qFU'],
        ];
        $payouts = [
            ['date' => 'Jul 14, 2026', 'method' => 'Stripe', 'amount' => '$84,201', 'status' => 'Processed'],
            ['date' => 'Jul 07, 2026', 'method' => 'Stripe', 'amount' => '$72,910', 'status' => 'Processed'],
            ['date' => 'Jun 30, 2026', 'method' => 'Stripe', 'amount' => '$68,402', 'status' => 'Processed'],
            ['date' => 'Jun 23, 2026', 'method' => 'Stripe', 'amount' => '$59,801', 'status' => 'Processed'],
        ];
        return view('super-admin.revenue', compact('kpis','bars','byRegion','topEarners','payouts'));
    }

    public function system()
    {
        $services = [
            ['service' => 'API Gateway',     'status' => 'Operational', 'latency' => '42 ms',  'uptime' => '99.99%', 'region' => 'us-east-1'],
            ['service' => 'Auth Service',    'status' => 'Operational', 'latency' => '38 ms',  'uptime' => '99.97%', 'region' => 'global'],
            ['service' => 'CDN (Audio)',     'status' => 'Degraded',    'latency' => '128 ms', 'uptime' => '99.42%', 'region' => 'eu-west-1'],
            ['service' => 'Payment Gateway', 'status' => 'Operational', 'latency' => '210 ms', 'uptime' => '99.91%', 'region' => 'us-east-1'],
            ['service' => 'Background Jobs', 'status' => 'Operational', 'latency' => '—',      'uptime' => '99.99%', 'region' => 'us-east-1'],
            ['service' => 'Database (RDS)',  'status' => 'Operational', 'latency' => '8 ms',   'uptime' => '99.99%', 'region' => 'us-east-1'],
            ['service' => 'Cache (Redis)',   'status' => 'Operational', 'latency' => '2 ms',   'uptime' => '99.99%', 'region' => 'us-east-1'],
            ['service' => 'Search (Meili)',  'status' => 'Operational', 'latency' => '14 ms',  'uptime' => '99.94%', 'region' => 'us-east-1'],
        ];
        $incidents = [
            ['title' => 'Elevated CDN latency in eu-west-1', 'status' => 'Investigating', 'severity' => 'Minor',    'time' => '14 min ago'],
            ['title' => 'Stripe webhook retry storm',        'status' => 'Resolved',      'severity' => 'Major',    'time' => '3 days ago'],
            ['title' => 'Auth Service intermittent 401s',    'status' => 'Resolved',      'severity' => 'Critical', 'time' => '12 days ago'],
        ];
        $metrics = [
            ['label' => 'API requests (24h)', 'value' => '12.4M', 'icon' => 'public'],
            ['label' => 'P95 latency',        'value' => '92 ms', 'icon' => 'speed'],
            ['label' => 'Error rate',         'value' => '0.04%', 'icon' => 'error'],
            ['label' => 'Active workers',     'value' => '48',    'icon' => 'memory'],
        ];
        $loadSeries = [22,24,21,28,33,30,36,41,38,44,40,48,52,50,56,60,58,65,70,68];
        return view('super-admin.system', compact('services','incidents','metrics','loadSeries'));
    }

    public function audit()
    {
        $events = [
            ['who' => 'ken@soundredeem.io',     'action' => 'user.suspended',    'target' => 'jules.x@example.com',  'meta' => 'Reason: chargeback risk',   'time' => 'Just now',     'severity' => 'warning'],
            ['who' => 'ken@soundredeem.io',     'action' => 'asset.published',   'target' => 'After Hours',          'meta' => 'Price $4.99 · Limit 5,000', 'time' => '12 min ago',   'severity' => 'info'],
            ['who' => 'system',                 'action' => 'token.invalidated', 'target' => '#TK-88217',            'meta' => 'Source: Digital pass',      'time' => '24 min ago',   'severity' => 'warning'],
            ['who' => 'rae.ops@soundredeem.io', 'action' => 'role.updated',      'target' => 'sam.k@soundredeem.io', 'meta' => 'staff → support',           'time' => '1 hr ago',     'severity' => 'info'],
            ['who' => 'system',                 'action' => 'payout.processed',  'target' => 'Stripe',               'meta' => '$84,201.00 settled',        'time' => '2 hr ago',     'severity' => 'success'],
            ['who' => 'ken@soundredeem.io',     'action' => 'api_key.rotated',   'target' => 'live_pk_***42',        'meta' => 'Rotated by Super Admin',    'time' => '6 hr ago',     'severity' => 'critical'],
            ['who' => 'system',                 'action' => 'cdn.degraded',      'target' => 'eu-west-1',            'meta' => 'Auto-failover engaged',     'time' => '14 hr ago',    'severity' => 'critical'],
            ['who' => 'rae.ops@soundredeem.io', 'action' => 'refund.issued',     'target' => '#TK-88214',            'meta' => '$4.99 → maya.f',            'time' => '1 day ago',    'severity' => 'warning'],
            ['who' => 'ken@soundredeem.io',     'action' => 'settings.updated',  'target' => 'platform.branding',    'meta' => 'Theme: Sonic Spotify',      'time' => '2 days ago',   'severity' => 'info'],
            ['who' => 'system',                 'action' => 'backup.completed',  'target' => 'rds.snapshot.daily',   'meta' => 'Size 12.4 GB',              'time' => '2 days ago',   'severity' => 'success'],
        ];
        return view('super-admin.audit', compact('events'));
    }

    public function settings()
    {
        $apiKeys = [
            ['label' => 'Production · pk_live', 'masked' => 'live_pk_*****************42', 'created' => 'Jan 12, 2024', 'scopes' => 'read · write'],
            ['label' => 'Production · sk_live', 'masked' => 'live_sk_*****************a9', 'created' => 'Jan 12, 2024', 'scopes' => 'admin'],
            ['label' => 'Sandbox · pk_test',    'masked' => 'test_pk_*****************11', 'created' => 'Jun 02, 2024', 'scopes' => 'read · write'],
        ];
        $integrations = [
            ['name' => 'Stripe',     'desc' => 'Payments & payouts',        'status' => true,  'icon' => 'payments'],
            ['name' => 'Resend',     'desc' => 'Transactional email',       'status' => true,  'icon' => 'mail'],
            ['name' => 'Cloudflare', 'desc' => 'CDN + WAF',                 'status' => true,  'icon' => 'cloud'],
            ['name' => 'Slack',      'desc' => 'Ops alerts → #soundredeem', 'status' => true,  'icon' => 'chat'],
            ['name' => 'Datadog',    'desc' => 'Metrics + APM',             'status' => false, 'icon' => 'monitoring'],
            ['name' => 'PagerDuty',  'desc' => 'On-call escalation',        'status' => false, 'icon' => 'notifications_active'],
        ];
        return view('super-admin.settings', compact('apiKeys','integrations'));
    }
}
